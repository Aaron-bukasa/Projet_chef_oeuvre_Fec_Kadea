const express = require('express');
const router = express.Router();
const ctr_users = require('../controllers/controller_users');

router.post('/signup', ctr_users.signup)
router.post('/login', ctr_users.login)
router.get('/', ctr_users.usersGet);
router.get('/:id', ctr_users.userGet)
router.get('/font/:id', ctr_users.userGetFront)
router.put('/:id', ctr_users.userPut)
router.delete('/:id', ctr_users.userDelete);
router.post('/logout', ctr_users.userLogout);

module.exports = router;
