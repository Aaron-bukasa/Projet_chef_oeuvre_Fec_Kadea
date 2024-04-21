const express = require('express');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const prisma = new PrismaClient();
const router = express.Router();

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

const gmailAuthUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://mail.google.com/'],
});

exports.abonnementPost = async(req, res) => {
  const { email } = req.body;

  try {
    const subscription = await prisma.abonnement.create({
      data: {
        email
      },
    });

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_HOST,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: await oAuth2Client.getAccessToken(),
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_HOST,
      to: email,
      subject: 'Confirmation de votre abonnement à la newsletter',
      text: `Cliquez sur ce lien pour confirmer votre abonnement : ${process.env.WEBSITE_URL}/confirm/${subscription.id}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email de confirmation envoyé ! Veuillez vérifier votre boîte de réception.');
  } catch (error) {
    console.error('Erreur lors de l\'abonnement à la newsletter :', error);
    res.status(500).send('Une erreur s\'est produite lors de l\'abonnement à la newsletter.');
  }
}

exports.abonnementConfirm = async(req, res) => {

  const { id } = req.params;

  try {
    await prisma.abonnement.update({
      where: { id: parseInt(id) },
      data: { confirmed: true },
    });

    res.redirect('/confirmation');
  } catch (error) {
    console.error('Erreur lors de la confirmation de l\'abonnement :', error);
    res.status(500).send('Une erreur s\'est produite lors de la confirmation de l\'abonnement.');
  }
}

// exports.abonneSubscribe = async(req, res) => {
//     try {
//         const { nom, email } = req.body;
    
//         const newAbonne = await prisma.abonnes.create({
//           data: {
//             nom,
//             email
//           }
//         });
//         console.log(newAbonne);
//         res.status(201).json('Un email de confirmation vous a été envoyé. Veuillez consulter votre boîte de réception pour confirmer votre abonnement à la newsletter.');

//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Erreur lors de soumission de votre demande' });
//       }
// }

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

  exports.abonnesGet = async(req, res) => {

    try {
      const abonnes = await prisma.abonnement.findMany({
        include: {
          newsletter: true
        }
      });
     
      res.status(200).render('newsletters', {abonnes});
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
  
  }
  