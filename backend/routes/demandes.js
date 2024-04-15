const express = require('express');
const middlewareAuth = require('../middleware/auth');
const router = express.Router();
const ctr_demandes = require('../controllers/controller_demandes');

router.get('/', middlewareAuth, ctr_demandes.demandesGet);
router.post('/', ctr_demandes.demandePost);
router.get('/:id', middlewareAuth, ctr_demandes.demandeGet);
router.put('/:id', middlewareAuth, ctr_demandes.demandePut);
router.delete('/:id', middlewareAuth, ctr_demandes.demandeDelete);

module.exports = router;