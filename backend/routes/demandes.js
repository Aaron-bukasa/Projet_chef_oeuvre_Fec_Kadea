const express = require('express');
const router = express.Router();
const ctr_demandes = require('../controllers/controller_demandes');

router.get('/', ctr_demandes.demandesGet);

module.exports = router;