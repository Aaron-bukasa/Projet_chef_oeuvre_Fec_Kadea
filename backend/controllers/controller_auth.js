exports.authLogin = (req, res) => {
    try {
        res.status(200).render('auth');
    } catch (error) {
        console.error(error);
    }
}

exports.confirmation = (req, res) => {
  try {        
      res.status(200).render('confirmation');
  } catch (error) {
      console.error(error);
  }
}

// exports.authEmail = async (req, res) => {
//     const { code } = req.query;
  
//     try {
//       const credentials = await oauth2Client.getToken(code);
//       oauth2Client.setCredentials(credentials);
  
//       // Stockez le jeton d'accès et le jeton d'actualisation en toute sécurité (par exemple, session, base de données)
//       req.session.accessToken = credentials.access_token; // Ajustez en fonction de votre mécanisme de stockage
  
//       res.redirect('/success'); // Rediriger vers une page de réussite
//     } catch (error) {
//       console.error('Erreur lors de l\'obtention des jetons :', error);
//       res.status(500).send('Erreur d\'autorisation');
//     }
// }