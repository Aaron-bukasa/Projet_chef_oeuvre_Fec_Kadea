const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

import('chai').then(chai => {
  const expect = chai.expect;

  describe('Tests pour la classe Demande', () => {
    afterEach(async () => {
      await prisma.demande.deleteMany();
    });
  
    it('devrait soumettre une demande avec des valeurs valides', async () => {
      const demande = {
        nom: 'Nom de la demande',
        email: 'email@example.com',
        organisation: 'Organisation XYZ',
        statut: 'en attente',
        date_soumission: new Date(),
        fichiers_joints: ['fichier1.pdf', 'fichier2.doc']
      };
  
      const nouvelleDemande = await prisma.demande.create({ data: demande });
  
      expect(nouvelleDemande).to.exist;
      expect(nouvelleDemande.nom).to.equal('Nom de la demande');
      expect(nouvelleDemande.email).to.equal('email@example.com');
    });
  
    it('devrait échouer la soumission d\'une demande avec des valeurs invalides', async () => {
      const demande = {
        email: 'email',
        organisation: 'Organisation XYZ',
        statut: 'en attente',
        date_soumission: new Date(),
        fichiers_joints: ['fichier1.pdf', 'fichier2.doc']
      };
  
      try {
        await prisma.demande.create({ data: demande });
        throw new Error('La création de la demande avec des valeurs invalides a réussi');
      } catch (error) {
        expect(error.message).to.include('Invalid email');
      }
    });
  });
  
}).catch(error => {
  console.error('Erreur lors de l\'importation de Chai :', error);
});