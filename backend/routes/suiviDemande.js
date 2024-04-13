const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_suiviDemande = require('../controllers/controller_suiviDemande');

router.post('/', ctr_suiviDemande.suiviDemandePost);
router.post('/:id', ctr_suiviDemande.suviDemandeGet);

module.exports = router;