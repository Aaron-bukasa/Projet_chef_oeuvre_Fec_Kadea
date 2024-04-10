const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

function generateAuthToken(user) {
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      nom: user.nom
    };
    const secretKey = process.env.RANDOM_TOKEN_SECRET;
    const token = jwt.sign(payload, secretKey, { expiresIn: '2h' });
  
    return token;
}

exports.signup = async(req, res) => {
    try {
        const { nom, email, telephone, mot_de_passe, role } = req.body;
    
        const motDePasseHash = bcrypt.hashSync(mot_de_passe, 10);
    
        const nouvelUtilisateur = await prisma.utilisateur.create({
          data: {
            nom,
            email,
            telephone,
            mot_de_passe: motDePasseHash,
            role,
            statut: 'actif',
            date_inscription: new Date(),
            suivi_utilisateur: {
              create: [
                { notifications: "Bienvenue sur votre compte utilisateur" },
              ]
            }
          }
        });
        const token = generateAuthToken(nouvelUtilisateur)
        res.status(201).json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
      }
}

exports.login = async(req, res) => {
    try {
        const { email, mot_de_passe } = req.body;
    
        const utilisateur = await prisma.utilisateur.findUnique({ where: { email } });
        if (!utilisateur) {
          return res.status(401).json({ message: 'Email incorrect ou utilisateur non trouvé' });
        }
    
        const motDePasseValide = bcrypt.compareSync(mot_de_passe, utilisateur.mot_de_passe);
        if (!motDePasseValide) {
          return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
        
        const token = generateAuthToken(utilisateur)

        if(utilisateur.role === "utilisateur") {
          return res.status(200).json({token})
        } else if(utilisateur.role === "administrateur") {
          return res.status(200).json({r:"adm", token})
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la connexion' });
      }
}

exports.userPut = async(req, res) => {
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

exports.usersGet = async(req, res) => {

    try {
        const users = await prisma.utilisateur.findMany();
        res.status(200).render('users', {users});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
      }
}

exports.userGet = async(req, res) => {
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
    
        res.status(200).render('user', {user});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur" });
      }
}

exports.userGetFront = async(req, res) => {
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

exports.userDelete = async(req, res) => {
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

exports.userLogout = async(req, res) => {
  try {
    res.clearCookie('jwtToken');
    res.status(200).json({ message: 'La déconnection réussi avec succès' });
  } catch (error) {
   console.error(error); 
  };
};