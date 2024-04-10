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

    const newUser = await prisma.user.create({
      data: {
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
            { notifications: "Bienvenue sur votre compte utilisateur" },
          ]
        }
      }
    });

    res.status(201).render('users', { message: `${newUser.role} créé avec succès` });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription' });
  }
};


exports.serverLogin = async(req, res) => {

  try {
      const { email, password } = req.body;
  
      const adm = await prisma.user.findUnique({ where: { email } });

      if (!adm) {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
      }
  
      const passwordValid = bcrypt.compareSync(password, adm.password);

      if (!passwordValid) {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
      }
      
      const token = generateAuthToken(adm)

      if(adm.role === "administrateur") {
        return res.status(200).render('dashboard', {token})
      } else {
        return res.status(401).json({message: 'Erreur de vérification'})
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur serveur' });
    }

}


exports.serverLogout = async(req, res) => {

  try {
    res.clearCookie('jwtToken');
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
console.log(users);
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
          profil: true,
          suivi_user: true
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

    const passwordHash = bcrypt.hashSync(password, 10);

    const userUpdate = await prisma.user.update({
      where: { id: parseInt(id)},
      data: {
        email: email || user.email,
        password: passwordHash,
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
          email: user.email.match(/(?<=EDN.ICM.PSSR)[a-zA-Z ]+(?=EDN.ICM.PSSR)/)
        }
      });
  
      res.status(200).render('user', {message: 'Utilisateur debloqué avec succès'});
      
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la modification du profil" });
    }
}


exports.serverUserDelete = async(req, res) => {
  try {
      const { id } = req.params;
  
      await prisma.utilisateur.delete({
        where: { id: parseInt(id) }
      });
  
      res.status(200).render('users', { message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
}


// CONTROLLERS CLIENT

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

exports.clientUserPut = async (req, res) => {
  try {
      const { id } = req.params;

      const userExists = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });

      if (!userExists) {
          return res.status(404).json({ error: 'Utilisateur non trouvé.' });
      }

      const updatedProfil = await prisma.user.update({
          where: { id: userId },
          data: {
              profil: {
                  update: {
                      username: req.body.username,
                      bannere: req.body.bannere,
                      thumbnailProfil: req.body.imgProfil,
                      bio: req.body.bio,
                      localisation: req.body.localisation,
                      website: req.body.website,
                  },
              },
          },
          include: { profil: true },
      });

      res.status(201).json({ success: true, updatedProfile: updatedProfil.profil });
  } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la mise à jour du profil.' });
  }
};

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