const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_newsletter = require('../controllers/controller_newsletter');

router.post('/abonnement', ctr_newsletter.abonnementPost);
router.get('/abonnement/confirm/:id', ctr_newsletter.abonnementConfirm)
router.post('/send', ctr_newsletter.newsletterSend);
router.get('/', ctr_newsletter.abonnesGet);
router.get('/confirmation', ctr_newsletter.confirmationGet)

module.exports = router;