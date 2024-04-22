const express = require('express');
const router = express.Router();
const ctr_auth = require('../controllers/controller_auth');

router.get('/', ctr_auth.authLogin);
router.get('/confirmation', ctr_auth.confirmation)
// router.get('/auth/callback', ctr_auth.authEmail);

module.exports = router;