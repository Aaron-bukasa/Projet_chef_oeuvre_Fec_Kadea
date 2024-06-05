require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
const uuid = require("uuid");
const requestId = uuid.v4();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

exports.messageReceive = async (req, res) => {
  const { nom, email, objet, message } = req.body;

  try {
    const nouveauMessage = await prisma.message.create({
      data: {
        requestId,
        nom,
        email,
        objet,
        message,
        confirmed: false
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
      from: `"Fédération des entreprises du Congo (FEC)" <${process.env.EMAIL_HOST}>`,
      to: email,
      subject: 'Confirmation de réception de votre message',
      text: `Nous avons bien reçu votre message. Veuillez confirmer en répondant à cet e-mail.`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Votre message a été envoyé avec succès. Veuillez vérifier votre boîte de réception pour la confirmation.');

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail de contact :', error);
    res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail de contact.');
  }
};


exports.confirmerReceptionMessage = async (req, res) => {
  const { email } = req.body;

  try {
    const message = await prisma.message.findFirst({
      where: {
        email,
        confirme: false
      }
    });

    if (message) {
      await prisma.message.update({
        where: { messageRequestId: message.messageRequestId },
        data: { confirmed: true }
      });

      res.status(200).send('Votre message a été confirmé avec succès.');

    } else {
      res.status(404).send('Aucun message non confirmé correspondant trouvé pour cet e-mail.');
    }

  } catch (error) {
    console.error('Erreur lors de la confirmation de réception du message :', error);
    res.status(500).send('Une erreur s\'est produite lors de la confirmation de réception du message.');
  }
};



exports.messageSend = async (req, res) => {

  const { messageRequestId, objet, email, reponse } = req.body;

  if (!isValidEmail(email)) {
    res.status(400).json({ message: 'Adresse email invalide' });
    return;
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );
  oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_HOST,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
      from: `"Fédération des entreprises du Congo (FEC)" <${process.env.EMAIL_HOST}>`,
      to: req.body.email,
      subject: req.body.objet,
      text: req.body.message
    }

    const result = await transport.sendMail(mailOptions)

    if(result) {
      const response = await prisma.messageReponse.create({
        data: {
          message: {
            connect: {
              requestId: messageRequestId
            }
          },
          objet: objet,
          reponse: reponse 
        }
      });
    }
    res.status(200).json({message: "E-mail envoyé avec succès !"});
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
  }
};


exports.messagesGet = async(req, res) => {
  try {
    const messages = await prisma.message.findMany();
    res.status(200).render('messages', {messages})
  } catch (error) {
    console.error(error);
  }
}

exports.messageGet = async(req, res) => {
  try {
      const { id } = req.params;
  
      const message = await prisma.message.findUnique({
        where: { requestId: requestId },
        include: {
         message_reponse: true
        }
      });
  
      if (!message) {
        return res.status(404).json({ message: 'message non trouvée' });
      }
  
      res.status(200).render('message', {message});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération du message" });
    }
}