require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

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
        where: { id: parseInt(id) },
        include: {
          suivi_demande: true
        }
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

exports.demandePost = async (req, res) => {
  
  const { nom, email, telephone, nom_organisation, forme_juridique, secteur_activite, province_activite } = req.body;

  try {
    const nouvelleDemande = await prisma.demande.create({
      data: {
        nom,
        email,
        telephone,
        nom_organisation,
        forme_juridique,
        secteur_activite,
        province_activite,
        suivi_demande: {
          create: [
            { evenement: "Démande d'adhésion en attente" },
          ]
        }
      }
    });

    const oAuth2Client = new OAuth2Client({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI
    });

    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });

    const tokens = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_HOST,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: tokens.token
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_HOST,
      to: email,
      subject: 'Confirmation de votre demande d\'adhésion',
      text: `Cliquez sur ce lien pour confirmer votre demande d'adhésion : ${process.env.WEBSITE_URL}/demandes/confirm/${nouvelleDemande.id}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json('Email de confirmation envoyé ! Veuillez vérifier votre boîte de réception.');
  } catch (error) {
    console.error('Erreur lors de l\'abonnement à la newsletter :', error);
    res.status(500).json('Une erreur s\'est produite lors de la soumission de la demande.');
  }
};


exports.demandeConfirm = async(req, res) => {
  const { id } = req.params;

  try {
    await prisma.demande.update({
      where: { id: parseInt(id) },
      data: { confirmed: true },
    });

    res.redirect(`/demandes/confirmation_demande/${id}`);
  } catch (error) {
    console.error('Erreur lors de la confirmation de l\'abonnement :', error);
    res.status(500).send('Une erreur s\'est produite lors de la confirmation de l\'abonnement.');
  }
}


exports.confirmation_demande = (req, res) => {
  const {id} = req.params;
  try {        
      res.status(200).render('confirmationDmd', {id});
  } catch (error) {
      console.error(error);
  }
}

exports.demandePut = async(req, res) => {
    try {
        const { id } = req.body;
        const { statut } = req.body;
    
        const demandeModifiee = await prisma.demande.update({
          where: { id: parseInt(id) },
          data: {
            statut: statut
          }
        });
        console.log('voir');
        res.status(200).json('Demande validée avec succès');
      } catch (error) {
        console.error(error);
        res.status(500).json('Erreur lors de la validation de la demande');
      }
}

exports.demandeDelete = async (req, res) => {
  const { id } = req.body;

  try {
    await prisma.suiviDemande.deleteMany({
      where: {
        demandeId: parseInt(id),
      },
    });

    await prisma.demande.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).send("Demande supprimée avec succès");
  } catch (error) {
    console.error('Erreur lors de la suppression de la demande :', error);
    res.status(500).send("Une erreur s'est produite lors de la suppression de la demande.");
  }
};

