const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_suiviDemande = require('../controllers/controller_suiviDemande');

router.post('/', ctr_suiviDemande.suiviDemandePost);
router.put('/', ctr_suiviDemande.suiviDemandePut);
router.delete('/', ctr_suiviDemande.suiviDemandeDelete);
router.get('/', ctr_suiviDemande.suviDemandeGet);

module.exports = router;