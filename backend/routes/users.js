const express = require('express');
const router = express.Router();
const ctr_users = require('../controllers/controller_users');

router.get('/', ctr_users.usersGet);

module.exports = router;
