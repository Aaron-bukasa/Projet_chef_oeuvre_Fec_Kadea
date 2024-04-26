const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.suiviDemandePost = async (req, res) => {
  try {
    const { id, evenement } = req.body;
    const nouveauSuiviDemande = await prisma.suiviDemande.create({
      data: {
        demande: { connect: { id: parseInt(id) } },
        evenement,
      },
    });

    res.status(201).json({ message: 'Suivi de demande créé avec succès', suivi: nouveauSuiviDemande });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du suivi de demande' });
  }
};

exports.suiviDemandePut = async (req, res) => {
  try {
    const { id, evenement } = req.body;

    const suivi_demande = await prisma.suiviDemande.findUnique({ where: { id: parseInt(id) } });
    if (!suivi_demande) {
      return res.status(404).json({ message: "Suivi non trouvé" });
    }

    const suiviUpdate = await prisma.suiviDemande.update({
      where: { id: parseInt(id)},
      data: {
        evenement: evenement,
      }
  
    });

    return res.status(200).json({ message: "Suivi mis à jour avec succès" });
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du suivi' });
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