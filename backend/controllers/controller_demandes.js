exports.demandesGet = async(req, res) => {

    try {
        const demandes = await prisma.demande.findMany();
    
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

exports.demandePost = async(req, res) => {
    try {
        const { nom, email, organisation, fichiers_joints } = req.body;
        
        const nouvelleDemande = await prisma.demande.create({
          data: {
            nom,
            email,
            organisation,
            statut: 'en attente',
            date_soumission: new Date(),
            fichiers_joints
          }
        });
    
        res.status(200).json({ message: 'Demande soumise avec succès', demande: nouvelleDemande });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la soumission de la demande' });
    }
};

exports.demandePut = async(req, res) => {
    try {
        const { id } = req.params;
        const { nom, email, organisation, fichiers_joints } = req.body;
    
        const demandeModifiee = await prisma.demande.update({
          where: { id: parseInt(id) },
          data: {
            nom,
            email,
            organisation,
            fichiers_joints
          }
        });
    
        res.status(200).json({ message: 'Demande modifiée avec succès', demande: demandeModifiee });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la modification de la demande' });
      }
}

exports.demandeDelete = async(req, res) => {
    try {
        const { id } = req.params;
    
        await prisma.demande.delete({
          where: { id: parseInt(id) }
        });
    
        res.status(200).json({ message: 'Demande annulée avec succès' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'annulation de la demande' });
      }
}