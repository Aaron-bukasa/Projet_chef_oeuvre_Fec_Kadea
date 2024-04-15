const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

// GENERATEUR TOKEN

function generateAuthToken(user) {

    const payload = {
      userId: user.id,
      email: user.email,
      nom: user.nom
    };
    const secretKey = process.env.RANDOM_TOKEN_SECRET;
    const token = jwt.sign(payload, secretKey, { expiresIn: '2h' });
  
    return token;
}

// CONTROLLERS CLIENT

exports.clientSignup = async(req, res) => {
    try {
        const { nom, email, telephone, password } = req.body;
    
        const passwordHash = bcrypt.hashSync(password, 10);
    
        const newUser = await prisma.user.create({
          data: {
            nom,
            email,
            password: passwordHash,
            date_inscription: new Date(),
            profil_user: {
              create: {
                nom,
                telephone
              }
            },
            suivi_user: {
              create: [
                { notifications: "Bienvenue sur votre compte utilisateur" },
              ]
            }
          }
        });
        const token = generateAuthToken(newUser)
        res.status(201).cookie('token', token, {
          httpOnly: true,
          secure: true
        }).json('Utilisateur créé avec succès');

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
      }
}

exports.clientLogin = async(req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = generateAuthToken(user);
    console.log(user);

    res.status(200).cookie('token', token, {
      httpOnly: true,
      secure: true
    }).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
}

exports.clientLogout = async(req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).render('auth', { message: 'Vous vous etes déconnecté' });
  } catch (error) {
   console.error(error); 
  };
};

exports.clientUserGet = async(req, res) => {
  try {
      const { id } = req.params;
  
      const user = await prisma.utilisateur.findUnique({
        where: { id: parseInt(id) },
        include: {
          suivi_utilisateur: true
        }
      });
  
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvée' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur" });
    }
}

exports.clientUserPut = async(req, res) => {
    try {
        const userId = req.body.id;
        const { nom, email, telephone, role } = req.body;
    
        const utilisateur = await prisma.utilisateur.findUnique({ where: { id: userId } });
        if (!utilisateur) {
          return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    
        const utilisateurMisAJour = await prisma.utilisateur.update({
          where: { id: userId },
          data: {
            nom: nom || utilisateur.nom,
            email: email || utilisateur.email,
            telephone: telephone || utilisateur.telephone,
            role: role || utilisateur.role
          }
        });
    
        res.status(200).json({ utilisateur: utilisateurMisAJour });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la modification du profil" });
      }
}

exports.clientUserDelete = async(req, res) => {
  try {
      const { id } = req.params;
  
      await prisma.utilisateur.delete({
        where: { id: parseInt(id) }
      });
  
      res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
}