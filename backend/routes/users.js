const express = require('express');
const router = express.Router();
const ctr_users = require('../controllers/controller_users');

router.post('/signup', ctr_users.signup)
router.post('/login', ctr_users.login)
router.get('/', ctr_users.usersGet);
router.get('/:id', ctr_users.userGet)
router.put('/:id', ctr_users.userPut)

module.exports = router;
