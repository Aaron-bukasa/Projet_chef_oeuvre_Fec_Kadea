const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = process.env.EMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.EMAIL_CLIENT_SECRET;
const REDIRECT_URI = process.env.EMAIL_REDIRECT_URL;
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authEmail = async (req, res, next) => {
  // Vérifier si le jeton d'accès existe dans la session ou les cookies (si applicable)
  const accessToken = req.session?.accessToken; // Ajustez en fonction de votre mécanisme de stockage

  if (accessToken) {
    // Le jeton d'accès existe, utilisez-le pour les appels d'API
    req.oauth2Client = oauth2Client;
    req.accessToken = accessToken;
    next();
  } else {
    // Jeton d'accès manquant, lancer le flux d'autorisation
    const authorizationUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    });
    res.redirect(authorizationUrl);
  }
};

module.exports = authEmail;
