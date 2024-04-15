const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_message = require('../controllers/controller_message');

router.post('/receive', ctr_message.messageReceive);
router.post('/send', middlewareAuth, ctr_message.messageSend);

module.exports = router;