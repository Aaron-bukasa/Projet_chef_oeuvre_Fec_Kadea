const express = require('express');
const router = express.Router();
const ctr_suiviDemande = require('../controllers/controller_suiviDemande');

//router.get('/', ctr_suiviDemande.ctr_suiviDemandesGet);
router.post('/', ctr_suiviDemande.suiviDemandePost);
//router.get('/:id', ctr_suiviDemande.suviDemandeGet);
//router.put('/:id', ctr_suiviDemande.suiviDemandePut);
//router.delete('/:id', ctr_suiviDemande.suiviDemandeDelete);

module.exports = router;