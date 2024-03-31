const express = require('express');
const router = express.Router();
const ctr_demandes = require('../controllers/controller_demandes');

router.get('/', ctr_demandes.demandesGet);
router.get('/id', ctr_demandes.dmdeGet);

module.exports = router;