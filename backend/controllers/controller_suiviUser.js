const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.suiviUserPost = async (req, res) => {
  try {
    const { userId, notifications } = req.body;
  
    const newSuiviUser = await prisma.suiviUser.create({
      data: {
        user: {
          connect: {
            id: userId
          }
        },
        notifications: notifications 
      }
    });
    
    res.status(201).json(newSuiviUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la création du suivi utilisateur." });
  }
};

exports.suviUserGet = async(req, res) => {
  // try {
  //     const { id } = req.params;
    
  //     const user = await prisma.user.findUnique({
  //       where: { id: parseInt(id) },
  //       include: {
  //         suivi_user: true
  //       }
  //     });

  //     if (!user) {
  //       return res.status(404).json({ message: 'Utilisateur non trouvée' });
  //     } else {
  //       if(user.email !== req.body.email) {
  //         return res.status(404).json({ message: "nom ou email incorrect"})
  //       }
  //       const suiviUser = user.suivi_user;
  //       console.log(suiviUser);
  //       res.status(200).json({suiviUser});
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Erreur lors de la récupération de la demande' });
  //   }
}