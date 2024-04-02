const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.RANDOM_TOKEN_SECRET, (err, utilisateur) => {
        if (err) return res.sendStatus(403);
        req.utilisateur = utilisateur;
        next();
    });
}

module.exports = auth;



// const jwt = require('jsonwebtoken');
 
// module.exports = (req, res, next) => {
//    try {
//        const token = req.headers.authorization.split(' ')[1];
//        const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
//        const userId = decodedToken.userId;
//        req.auth = {
//            userId: userId
//        };
// 	next();
//    } catch(error) {
//        res.status(401).json({ error });
//    }
// };