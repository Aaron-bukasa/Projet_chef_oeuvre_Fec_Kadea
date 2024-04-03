const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.suiviDemandePost = async (req, res) => {
  try {
    const { demandeId, evenement } = req.body;
    console.log(req.body);
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


/*

exports.suiviDemandesGet = async(req, res) => {

  try {
      const demandes = await prisma.suiviDemande.findMany();
      res.status(200).render('demandes', {demandes});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des demandes' });
    }
}

exports.demandeGet = async(req, res) => {
    try {
        const { id } = req.params;
    
        const demande = await prisma.demande.findUnique({
          where: { id: parseInt(id) }
        });
    
        if (!demande) {
          return res.status(404).json({ message: 'Demande non trouvée' });
        }
    
        res.status(200).render('demande', {demande});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération de la demande' });
      }
}

*/