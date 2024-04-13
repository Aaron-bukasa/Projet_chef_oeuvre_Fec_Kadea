const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    
    const token = req.cookies.token;

    if (token) {
        
        jwt.verify(token, process.env.RANDOM_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send('Token invalide');
            } else {
                console.log('ok verifie');
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(401).send('Erreur d\'authentification');
    }
};