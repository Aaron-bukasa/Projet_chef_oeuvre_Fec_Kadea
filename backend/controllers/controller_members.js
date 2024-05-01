const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const uuid = require('uuid');
const crypto = require('crypto');

// GENERATEUR CODE
function genererCodeConfirmation() {
  return crypto.randomBytes(16).toString('hex');
}

// GENERATEUR TOKEN

function generateAuthToken(user) {
  const payload = {
    userId: user.id,
    email: user.email,
    nom: user.nom,
  };
  const secretKey = process.env.RANDOM_TOKEN_SECRET;
  const token = jwt.sign(payload, secretKey, { expiresIn: "2h" });

  return token;
}

// CONTROLLERS CLIENT

exports.memberSignup = async (req, res) => {
  try {
    const { requestId } = req.body;

    const userDemande = await prisma.demande.findUnique({ where: { requestId: requestId } });

    if (userDemande) {
      const passwordHash = bcrypt.hashSync(req.body.password, 10);

      const newUser = await prisma.user.create({
        data: {
          requestId: uuid.v4(),
          nom: userDemande.nom,
          email: userDemande.email,
          password: passwordHash,
          date_inscription: new Date(),
          profil_user: {
            create: {
              requestId: uuid.v4(),
              nom: userDemande.nom,
              telephone: userDemande.telephone,
            },
          },
          suivi_user: {
            create: [
              {
                requestId: uuid.v4(),
                notifications: `Bienvenue ${userDemande.nom} sur la plateforme de la fédérqtion des entreprises du Congo`
              },
            ],
          },
          confirm_user: {
            create: {
              code: genererCodeConfirmation(),
              expiration: new Date(Date.now() + 1000 * 60 * 60 * 24 * 0.0625),
            }
          }
        },
      });

      const oAuth2Client = new OAuth2Client({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI
      });

      oAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
      });

      const tokens = await oAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_HOST,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: tokens.token
        }
      });

      const mailOptions = {
        from: `"Fédération des entreprises du Congo (FEC)" <${process.env.EMAIL_HOST}>`,
        to: userDemande.email,
        subject: 'Confirmez votre adresse e-mail',
        text: `Veuillez utiliser ce code pour confirmer votre adresse e-mail : ${newUser.confirm_user.code}`
      };

      await transporter.sendMail(mailOptions);
      res.status(201).json('Le code de confirmation est envoyé ! Veuillez vérifier votre boîte de réception.')

    //   const token = generateAuthToken(newUser);
    //   res
    //     .status(201)
    //     .cookie("token", token, {
    //       httpOnly: true,
    //       secure: true,
    //     })
    //     .json("membrer ajouté avec succès");
    }

    res.status(401).json(newUser.requestId)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la définition du mot de passe" });
  }
};

exports.memberLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    const token = generateAuthToken(user);
    console.log(user);

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
      })
      .json({ id: user.id, nom: user.nom, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

exports.memberLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).render("auth", { message: "Vous vous etes déconnecté" });
  } catch (error) {
    console.error(error);
  }
};

// exports.memberAuth = async(req, res) => {
//   try {
//     res.status(200).json('found');
//   } catch (error) {
//     res.status(500).json('no found')
//   }
// }

exports.memberUserGet = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: {
        suivi_utilisateur: true,
        confirm_user: true
      },
    });

    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvée" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'utilisateur" });
  }
};

exports.memberUserPut = async (req, res) => {
  try {
    const userId = req.body.id;
    const { nom, email, password, telephone, role } = req.body;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const userUpdate = await prisma.user.update({
      where: { id: userId },
      data: {
        nom: nom || user.nom,
        email: email || user.email,
        password: password || user.password,
        telephone: telephone || user.telephone,
        role: role || user.role,
      },
    });

    res.status(200).json({ user: userUpdate });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la modification du profil" });
  }
};

exports.memberUserDelete = async (req, res) => {
  try {
    const { requestId } = req.body;
    
    await prisma.user.delete({
      where: { requestId: requestId },
    });

    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
};
