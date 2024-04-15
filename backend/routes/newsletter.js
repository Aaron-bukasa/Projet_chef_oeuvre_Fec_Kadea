const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_newsletter = require('../controllers/controller_newsletter');

router.post('/subscribe', ctr_newsletter.newsletterSubscribe);
router.post('/send',middlewareAuth, ctr_newsletter.newsletterSend);

module.exports = router;