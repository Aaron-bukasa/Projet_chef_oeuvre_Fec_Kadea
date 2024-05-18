const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    
    const role = req.user.role;

    if (role !== 'administrateur') {
        return res.status(403).json({ message: 'Accès non autorisé' });
    } else {
        next();
    }
};

