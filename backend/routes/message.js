const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_message = require('../controllers/controller_message');

router.post('/receive', ctr_message.messageReceive);
router.post('/send', middlewareAuth, ctr_message.messageSend);
router.get('/', ctr_message.messagesGet);
router.get('/:id', ctr_message.messageGet);

module.exports = router;