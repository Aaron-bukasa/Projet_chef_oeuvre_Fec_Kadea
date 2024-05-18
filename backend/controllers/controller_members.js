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
    userId: user.requestId,
    email: user.email,
    nom: user.nom,
    role: user.role
  };
  const secretKey = process.env.RANDOM_TOKEN_SECRET;
  const token = jwt.sign(payload, secretKey, { expiresIn: "24h" });

  return token;
}

// ENVOIE EMAIL
async function sendEmail(destinateur, code) {
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
    to: destinateur,
    subject: 'Confirmez votre adresse e-mail',
    text: `Veuillez utiliser ce code pour confirmer votre adresse e-mail : ${code}`
  };

  await transporter.sendMail(mailOptions);
}


// CONTROLLERS CLIENT

exports.memberSignup = async (req, res) => {
  try {
    const { requestId, password } = req.body;

    const userDemande = await prisma.demande.findUnique({ where: { requestId: requestId } });

    if (!userDemande) {
      return res.status(404).json({ message: "Demande introuvable" });
    }

    const passwordHash = bcrypt.hashSync(password, 10);

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
              notifications: `Bienvenue ${userDemande.nom} sur la plateforme de la fédération des entreprises du Congo`
            },
          ],
        }
      },
    });

    const codeConfirmation = genererCodeConfirmation();
    const dateExpiration = new Date();
    dateExpiration.setDate(dateExpiration.getDate() + 7);

    const confirmUser = await prisma.confirmationUser.create({
      data: {
        user: {
          connect: {
            requestId: newUser.requestId,
          },
        },
        requestId: uuid.v4(),
        code: codeConfirmation,
        expiration: dateExpiration,
      },
    });

    sendEmail(userDemande.email, codeConfirmation)
    return res.status(201).json({message:'Le code de confirmation est envoyé ! Veuillez vérifier votre boîte de réception.', id: newUser.requestId});

  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    return res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

exports.memberCheckCode = async (req, res) => {
  try {
    const { requestId, code } = req.body;

    const enregistrementConfirmation = await prisma.confirmationUser.findUnique({
      where: {
        userRequestId: requestId,
        code,
      },
    });

    if (!enregistrementConfirmation || enregistrementConfirmation.expiration < Date.now()) {
      throw new Error('Code de confirmation invalide ou expiré');
    }

    const user = await prisma.user.update({
      where: {
        requestId: requestId,
      },
      data: {
        verified: true,
      },
    });

    const token = generateAuthToken(user);

    await prisma.confirmationUser.delete({
      where: {
        requestId: enregistrementConfirmation.requestId,
      },
    });

    res.status(200).json({token: token});
  } catch (error) {
    console.error('Erreur de confirmation de l\'adresse e-mail :', error.message);
    res.status(500).json({ message: 'Erreur de confirmation de l\'adresse e-mail : ' + error.message });
  }
};

exports.resendCodeConfirmation = async(req, res) => {
  try {
    const {requestId} = req.body;
    const newCode = genererCodeConfirmation();
    const newDateExpiration = new Date();
    newDateExpiration.setDate(newDateExpiration.getDate() + 7);

    const codeUser = await prisma.confirmationUser.update({
      where: {
        userRequestId : requestId
      },
      data: {
        code: newCode,
        expiration: newDateExpiration,
      },
    });

    const user = await prisma.user.findUnique({where: {requestId : requestId}});

    if(codeUser && user) {
      sendEmail(user.email, newCode)
      return res.status(201).json('Nouveau code envoyé')
    } else {
      return res.status(404).json('Erreur lors de renvoie du nouveau code')
    }  
  } catch (error) {
    console.error(error);
    return res.status(500).json('Erreur server')
  }
  
}

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

    res
      .status(200).json({userId: user.requestId, token: token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

exports.memberRole = async(req, res) => {
  const {requestId} = req.body;
  try {
    const user = await prisma.user.findUnique({where: {requestId}});
    if(!user) {
      return res.status(400).json("membre introuvablee")
    }
    return res.status(200).json(user.role);
  } catch (error) {
    console.error(error);
    res.status(500).json("Erreur serveur")
  }
}

exports.memberLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).render("auth", { message: "Vous vous etes déconnecté" });
  } catch (error) {
    console.error(error);
  }
};

exports.memberUserGet = async (req, res) => {
  try {
    const { requestId } = req.body;

    const user = await prisma.user.findUnique({
      where: { requestId: requestId },
      include: {
        suivi_user: true,
        profil_user: true
      },
    });

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
    
    await prisma.suiviUser.deleteMany({
      where: {
        userRequestId: requestId,
      },
    });

    await prisma.profil.delete({
      where: {
        userRequestId: requestId,
      },
    });

    await prisma.confirmationUser.delete({
      where: {
        userRequestId: requestId,
      },
    });

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
