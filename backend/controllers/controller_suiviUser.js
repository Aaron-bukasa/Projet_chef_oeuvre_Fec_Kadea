const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.suiviUserPost = async (req, res) => {
  try {
    const { utilisateurId, notifications } = req.body;
    const nouveauSuiviUtilisateur = await prisma.suiviUtilisateur.create({
      data: {
        utilisateur: { connect: { id: utilisateurId } },
        notifications,
      },
    });

    res.status(201).json({ message: 'Suivi de demande créé avec succès', suivi: nouveauSuiviUtilisateur });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du suivi de demande' });
  }
};

exports.suviUserGet = async(req, res) => {
  try {
      const { id } = req.params;
    
      const utilisateur = await prisma.utilisateur.findUnique({
        where: { id: parseInt(id) },
        include: {
          suivi_utilisateur: true
        }
      });
  
      if (!utilisateur) {
        return res.status(404).json({ message: 'Utilisateur non trouvée' });
      } else {
        if(utilisateur.email !== req.body.email) {
          return res.status(404).json({ message: "le nom ou l'email incorrect"})
        }
        console.log(utilisateur);
        const suiviUtilisateur = utilisateur.suivi_utilisateur;
        res.status(200).json(suiviUtilisateur);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération de la demande' });
    }
}