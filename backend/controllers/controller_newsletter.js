require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const prisma = new PrismaClient();
const { OAuth2Client } = require('google-auth-library');


exports.abonnementPost = async (req, res) => {
  const { email } = req.body;

  try {
    const subscription = await prisma.abonnement.create({
      data: {
        email
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
      subject: 'Confirmation de votre abonnement à la newsletter',
      text: `Cliquez sur ce lien pour confirmer votre abonnement : ${process.env.WEBSITE_URL}/newsletters/abonnement/confirm/${subscription.id}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email de confirmation envoyé ! Veuillez vérifier votre boîte de réception.');
  } catch (error) {
    console.error('Erreur lors de l\'abonnement à la newsletter :', error);
    res.status(500).send('Une erreur s\'est produite lors de l\'abonnement à la newsletter.');
  }
};


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


exports.newsletterSend = async (req, res) => {

  const { objet, newsletter } = req.body;

  try {
    const abonnes = await prisma.abonnement.findMany({
      where: { confirmed: true },
      select: { email: true } 
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
      subject: objet,
      text: newsletter
    };

    for (const abonne of abonnes) {
      mailOptions.to = abonne.email;
      await transporter.sendMail(mailOptions);
    }

    await prisma.newsLetter.create({
      data: {
        objet,
        newsletter
      }
    })
    res.status(200).send('Newsletter envoyée avec succès à tous les abonnés confirmés.');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la newsletter :', error);
    res.status(500).send('Une erreur s\'est produite lors de l\'envoi de la newsletter.');
  }
};


exports.abonnesGet = async(req, res) => {

  try {
    const abonnes = await prisma.abonnement.findMany();
    const newsletters = await prisma.newsLetter.findMany();
    
    res.status(200).render('newsletters', {abonnes, newsletters});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
  }

}
  