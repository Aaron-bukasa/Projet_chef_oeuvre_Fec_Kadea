const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

exports.messageReceive = async(req, res) => {
    try {
        const { nom, email, objet, message } = req.body;
    
        const newMessage = await prisma.message.create({
          data: {
            nom,
            email,
            objet,
            message
          }
        });
        res.status(201).json('message envoyé avec succès');

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'envoie du message' });
      }
}

// exports.messageSend = async (req, res) => {

//   const { id } = req.body;

//   const isSubscribed = await prisma.message.findUnique({
//     where: {
//       id: parseInt(id)
//     },
//     select: {
//       subscribed: true
//     }
//   });

//   if (!isValidEmail(req.body.email)) {
//     res.status(400).json({ message: 'Adresse email invalide' });
//     return;
//   }

//   const message = {
//     from: process.env.MAIL_USER,
//     to: req.body.email,
//     subject: req.body.objet,
//     text: req.body.message
//   };

//   try {
//     await mailer.sendMail(message);
//     console.log(`Email envoyé à ${req.body.email}`);
//     res.json({ message: 'Email envoyé avec succès' });
//   } catch (error) {
//     console.error(`Erreur lors de l'envoi d'email à ${req.body.email}: ${error.message}`);
//     res.status(500).json({ message: 'Erreur d\'envoi d\'email' });
//   }
// };


exports.messageSend = async (req, res) => {
  const { id } = req.body;

  const isSubscribed = await prisma.message.findUnique({
    where: {
      id: parseInt(id)
    },
    select: {
      subscribed: true
    }
  });

  if (!isValidEmail(req.body.email)) {
    res.status(400).json({ message: 'Adresse email invalide' });
    return;
  }

  // Valider les autres champs du corps de la requête (objet, message)

  const oauth2Client = new google.auth.OAuth2(
    process.env.EMAIL_CLIENT_ID,
    process.env.EMAIL_CLIENT_SECRET,
    process.env.EMAIL_REDIRECT_URL
  );
  oauth2Client.setCredentials({refresh_token: process.env.EMAIL_REFRESH_TOKEN});


  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'aardev.buk@gmail.com',
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
      from: 'Aaron bukasa <aardev.buk@gmail.com>',
      to: req.body.email,
      subject: req.body.objet,
      text: req.body.message
    }

    const result = await transport.sendMail(mailOptions)
    console.log('E-mail envoyé avec succès !');
    res.status(200).json(result);
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
        where: { id: parseInt(id) },
      });
  
      if (!message) {
        return res.status(404).json('Message non trouvée');
      }
      res.status(200).render('message', {message});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération du message' });
    }
}
