const express = require('express');
const middlewareAuth = require('../middleware/auth');
const router = express.Router();
const ctr_demandes = require('../controllers/controller_demandes');

router.get('/', middlewareAuth, ctr_demandes.demandesGet);
router.get('/json', middlewareAuth, ctr_demandes.demandesGetJSON);
router.post('/', ctr_demandes.demandePost);
router.post('/signup', ctr_demandes.signupPost);
// router.get('/confirm/:requestId', ctr_demandes.demandeConfirm);
// router.get('/confirmation_demande/:requestId', ctr_demandes.confirmation_demande);
router.get('/:requestId', middlewareAuth, ctr_demandes.demandeGet);
router.get('/user/:requestId', middlewareAuth, ctr_demandes.demandeUserInfo);
// router.put('/', middlewareAuth, ctr_demandes.demandePut);
router.delete('/', middlewareAuth, ctr_demandes.demandeDelete);

module.exports = router;