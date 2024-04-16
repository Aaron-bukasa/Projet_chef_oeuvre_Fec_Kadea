const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const mailer = require('../config/mailer');
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

exports.messagesGet = async(req, res) => {
  try {
    const messages = await prisma.message.findMany();
    res.status(200).json(messages)
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
      res.status(200).json(message);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération du message' });
    }
}

exports.messageSend = async (req, res) => {

    const userEmail = req.body.email;

      if (!isValidEmail(userEmail)) {
        res.status(400).json({ message: 'Adresse email invalide' });
        return;
      }

      const isSubscribed = await prisma.newsLetter.findUnique({
        where: {
          email: userEmail
        },
        select: {
          subscribed: true
        }
      });

      const message = {
        from: process.env.MAIL_USER,
        to: userEmail,
        subject: req.body.objet,
        text: req.body.message
      };

      try {
        await mailer.sendMail(message);
        console.log(`Email envoyé à ${userEmail}`);
        res.json({ message: 'Email envoyé avec succès' });
      } catch (error) {
        console.error(`Erreur lors de l'envoi d'email à ${userEmail}: ${error.message}`);
        res.status(500).json({ message: 'Erreur d\'envoi d\'email' });
      }
  };