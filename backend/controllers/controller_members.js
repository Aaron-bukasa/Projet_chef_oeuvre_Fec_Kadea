const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

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
    const { email, password } = req.body;

    const userEmail = await prisma.demande.findUnique({ where: { email } });
    
    if (
      userEmail &&
      userEmail.confirmed === true &&
      userEmail.statut === "validée"
    ) {
      const passwordHash = bcrypt.hashSync(password, 10);

      const newUser = await prisma.user.create({
        data: {
          nom: userEmail.nom,
          email,
          password: passwordHash,
          date_inscription: new Date(),
          profil_user: {
            create: {
              nom: userEmail.nom,
              telephone: userEmail.telephone,
            },
          },
          suivi_user: {
            create: [
              { notifications: `Bienvenue ${userEmail.nom} sur la plateforme de la fédérqtion des entreprises du Congo`},
            ],
          },
        },
      });

      const token = generateAuthToken(newUser);
      res
        .status(201)
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
        })
        .json("membrer ajouté avec succès");
    }

    res.status(401).json("Erreur d'ajout du nouveau membrer")

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'inscription" });
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
    const { id } = req.params;

    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
};
