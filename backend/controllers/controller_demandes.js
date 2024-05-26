require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const uuid = require('uuid');

exports.demandesGet = async(req, res) => {

  try {
      const demandes = await prisma.demande.findMany();
      res.status(200).render('demandes', {demandes});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des demandes' });
    }
}

exports.demandesGetJSON = async(req, res) => {

  try {
      const demandes = await prisma.demande.findMany();
      res.status(200).json(demandes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des demandes' });
    }
}

exports.demandeGet = async(req, res) => {
  try {
      const { requestId } = req.params;
  
      const demande = await prisma.demande.findUnique({
        where: { requestId: requestId },
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
        requestId: uuid.v4(),
        nom,
        email,
        telephone,
        nom_organisation,
        forme_juridique,
        secteur_activite,
        province_activite,
      }
    });

    res.status(201).json({id: nouvelleDemande.requestId, nom: nouvelleDemande.nom, email: nouvelleDemande.email});
  } catch (error) {
    console.error('Erreur lors de la soumission de la demande :', error);
    res.status(500).json("Une erreur s'est produite lors de la soumission de la demande.");
  }
};


exports.demandeUserInfo = async(req, res) => {
  const { requestId } = req.params;
  const user = await prisma.demande.findUnique({where: {requestId: requestId}})
  const demandeUser = {name: user.nom, email: user.email}
  try {
    res.status(200).render('demandeUser', {demandeUser});
  } catch (error) {
      console.error(error);
  }
}


// exports.demandeConfirm = async(req, res) => {
//   const { requestId } = req.params;

//   try {
//     await prisma.demande.update({
//       where: { requestId: requestId },
//       data: { confirmed: true },
//     });

//     res.redirect(`/demandes/confirmation_demande/${requestId}`);
//   } catch (error) {
//     console.error('Erreur lors de la confirmation de la demande :', error);
//     res.status(500).send('Une erreur s\'est produite lors de la confirmation de la demande.');
//   }
// }


// exports.confirmation_demande = (req, res) => {
//   const {requestId} = req.params;
//   try {        
//       res.status(200).render('confirmationDmd', {requestId});
//   } catch (error) {
//       console.error(error);
//   }
// }

// exports.signupPost = async (req, res) => {

//   const {name, email} = req.body;

//   try {
//     const oAuth2Client = new OAuth2Client({
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       redirectUri: process.env.REDIRECT_URI
//     });

//     oAuth2Client.setCredentials({
//       refresh_token: process.env.REFRESH_TOKEN
//     });

//     const tokens = await oAuth2Client.getAccessToken();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: process.env.EMAIL_HOST,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: tokens.token
//       }
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_HOST,
//       to: email,
//       subject: 'validation de la demande',
//       text: `Félicitaion ${name} ! 
//             Votre demande d'adhésion a été validé, veillez rensigner les informations de la connexion à notre plateforme : ${process.env.FRONT_URL}/EDNICMPSSR/signup`
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json('Email d\'inscription vous a été envoyé ! Veuillez vérifier votre boîte de réception.');
//   } catch (error) {
//     console.error('Erreur lors de l\'envoie d\'email d\'inscription:', error);
//     res.status(500).json('Une erreur s\'est produite lors de la soumission de la demande.');
//   }
// };

exports.demandePut = async(req, res) => {
    try {
        const { requestId } = req.body;
        const { statut } = req.body;
    
        const demandeModifiee = await prisma.demande.update({
          where: { requestId: requestId },
          data: {
            statut: statut
          }
        });
        res.status(200).json('Demande validée avec succès');
      } catch (error) {
        console.error(error);
        res.status(500).json('Erreur lors de la validation de la demande');
      }
}

exports.demandeDelete = async (req, res) => {
  const { requestId } = req.body;

  try {
    await prisma.demande.delete({
      where: {
        requestId: requestId,
      },
    });

    res.status(200).json("Demande supprimée avec succès");
  } catch (error) {
    console.error('Erreur lors de la suppression de la demande :', error);
    res.status(500).json("Une erreur s'est produite lors de la suppression de la demande.");
  }
};

