const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.suiviDemandePost = async (req, res) => {
  try {
    const { demandeId, evenement } = req.body;
    const nouveauSuiviDemande = await prisma.suiviDemande.create({
      data: {
        demande: { connect: { id: demandeId } },
        evenement,
      },
    });

    res.status(201).json({ message: 'Suivi de demande créé avec succès', suivi: nouveauSuiviDemande });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du suivi de demande' });
  }
};

exports.suviDemandeGet = async(req, res) => {
  try {
      const { id } = req.params;
      const demande = await prisma.demande.findUnique({
        where: { id: parseInt(id) },
        include: {
          suivi_demande: true
        }
      });
  
      if (!demande) {
        return res.status(404).json({ message: 'Demande non trouvée' });
      } else {
        if(demande.nom !== req.body.nom) {
          return res.status(404).json({ message: "le nom ou le numero incorrect"})
        }

        const suiviDemande = demande.suivi_demande;
        res.status(200).json(suiviDemande);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération de la demande' });
    }
}