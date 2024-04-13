const express = require('express');
const router = express.Router();
const ctr_users = require('../controllers/controller_users');

// API SERVER
router.post('/server/signup', ctr_users.serverSignup);
router.post('/server/login', ctr_users.serverLogin);
router.post('/server/logout', ctr_users.serverLogout);
router.get('/server', ctr_users.serverUsersGet);
router.get('/server/:id', ctr_users.serverUserGet);
router.put('/server/:id', ctr_users.serverUserPut);
router.put('/server/:id/lock', ctr_users.serverUserLock);
router.put('/server/:id/unlock', ctr_users.serverUserUnlock);
router.delete('/server/:id', ctr_users.serverUserDelete);


// API CLIENT
// router.post('/client/signup', ctr_users.clientSignup);
// router.post('/client/login', ctr_users.clientLogin);
// router.post('/client/logout', ctr_users.clientLogout);
// router.get('/client/:id', ctr_users.clientUserGet);
// router.put('/client/:id', ctr_users.clientUserPut);
// router.delete('/client/:id', ctr_users.clientUserDelete);

module.exports = router;
