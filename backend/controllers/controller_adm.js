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

// CONTROLLERS SERVER

exports.serverSignup = async (req, res) => {
  try {
    const { nom, email, telephone, password, role } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    const newAdm = await prisma.user.create({
      data: {
        nom,
        email,
        password: passwordHash,
        role,
        date_inscription: new Date(),
        profil_user: {
          create: {
            nom,
            telephone
          }
        },
        suivi_user: {
          create: [
            { notifications: "Bienvenue sur votre compte administrateur" },
          ]
        }
      }
    });
    res.status(201).json({message: 'Administrateur créé avec succès'});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription' });
  }
};

exports.serverLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adm = await prisma.user.findUnique({ where: { email } });
    if (!adm || !bcrypt.compareSync(password, adm.password)) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = generateAuthToken(adm);
  
    if (adm.role === "administrateur") {

      res.status(200).cookie('token', token, {
        httpOnly: true,
        secure: true
      }).json('utilisateur verifié');

    } else {
      res.status(400).json({ message: 'Erreur lors de la connexion' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
};


exports.serverLogout = async(req, res) => {

  try {
    res.clearCookie('token');
    res.status(200).render('auth', { message: 'Vous vous etes déconnecté' });
  } catch (error) {
   console.error(error); 
  };

};


exports.serverUsersGet = async(req, res) => {

  try {
    const users = await prisma.user.findMany({
      include: {
        profil_user: true,
        suivi_user: true
      }
    });

    res.status(200).render('users', {users});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
  }

}


exports.serverUserGet = async(req, res) => {

  try {
      const { id } = req.params;
  
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
        include: {
          suivi_user: true,
          profil_user: true
        }
      });

      console.log(user);
  
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
     
      res.status(200).render('user', {user});

  } catch (error) {
    res.status(500).json({ message: 'Erreur server' });
  }
}


exports.serverUserPut = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "L'identifiant de l'utilisateur doit être un nombre" });
    }

    const { nom, email, telephone, password, role } = req.body;

    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const userUpdate = await prisma.user.update({
      where: { id: parseInt(id)},
      data: {
        email: email || user.email,
        password: password === user.password ? user.password : bcrypt.hashSync(password, 10),
        role: role || user.role,
        profil_user: {
          update: {
            data: {
              nom: nom || user.nom,
              telephone: telephone || user.telephone
       }
          }
        }
  }
  
    });

    res.status(200).json({ message: "Profil mis à jour avec succès" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};


exports.serverUserLock = async(req, res) => {
  try {
      const { id } = req.params;
      const lock = 'EDN.ICM.PSSR';
  
      const user = await prisma.user.findUnique({ where: {id: parseInt(id)} });
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      const userUpdate = await prisma.user.update({
        where: { id: id },
        data: {
          nom: lock+user.nom+lock,
          email: lock+user.email+lock,
        }
      });
  
      res.status(200).render('user', {message: 'Utilisateur bloqué avec succès'});
      alert('Utilisateur bloqué avec succès')
      
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la modification du profil" });
    }
}


exports.serverUserUnlock = async(req, res) => {
  try {
      const { id } = req.params;
  
      const user = await prisma.user.findUnique({ where: {id: parseInt(id)} });
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      const userUpdate = await prisma.user.update({
        where: { id: id },
        data: {
          nom: user.nom.match(/(?<=EDN.ICM.PSSR)[a-zA-Z ]+(?=EDN.ICM.PSSR)/),
          email: user.email.match(/(?<=EDN.ICM.PSSR)[a-zA-Z ]+(?=EDN.ICM.PSSR)/),
        }
      });
  
      res.status(200).render('user', {message: 'Utilisateur debloqué avec succès'});
      alert('Utilisateur debloqué avec succès')
      
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la modification du profil" });
    }
}


exports.serverUserDelete = async(req, res) => {
  try {
      const { id } = req.params;
  
      await prisma.user.delete({
        where: { id: parseInt(id) }
      });
  
      res.status(200).render('users', { message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
}