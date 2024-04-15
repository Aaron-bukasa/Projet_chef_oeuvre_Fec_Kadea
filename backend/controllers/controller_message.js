const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.messageReceive = async(req, res) => {
    try {
        const { nom, email, message } = req.body;
    
        const newMessage = await prisma.message.create({
          data: {
            nom,
            email,
            message
          }
        });
        res.status(201).json('message envoyé avec succès');

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'envoie du message' });
      }
}

exports.messageSend = async (req, res) => {
    // try {
    //   const { demandeId, evenement } = req.body;
    //   const nouveauSuiviDemande = await prisma.suiviDemande.create({
    //     data: {
    //       demande: { connect: { id: demandeId } },
    //       evenement,
    //     },
    //   });
  
    //   res.status(201).json({ message: 'Suivi de demande créé avec succès', suivi: nouveauSuiviDemande });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: 'Erreur lors de la création du suivi de demande' });
    // }
  };