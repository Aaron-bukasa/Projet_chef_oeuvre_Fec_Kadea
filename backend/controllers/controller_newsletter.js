const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.newsletterSubscribe = async(req, res) => {
    try {
        const { email } = req.body;
    
        const newUserNewsletter = await prisma.newsLetter.create({
          data: {
            email
          }
        });
        res.status(201).json('Demande soumise avec succès');

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de soumission de la demande' });
      }
}

exports.newsletterSend = async (req, res) => {
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