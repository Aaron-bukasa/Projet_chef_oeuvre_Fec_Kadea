const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_newsletter = require('../controllers/controller_newsletter');

router.post('/abonnement', ctr_newsletter.abonnementPost);
router.get('/abonnement/confirm/:requestId', ctr_newsletter.abonnementConfirm)
router.post('/send', ctr_newsletter.newsletterSendPost);
router.get('/send', ctr_newsletter.newsletterSendGet);
router.get('/', ctr_newsletter.abonnesGet);

module.exports = router;