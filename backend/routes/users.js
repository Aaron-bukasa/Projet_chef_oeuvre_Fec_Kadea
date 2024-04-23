const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_adm = require('../controllers/controller_adm');
const ctr_users = require('../controllers/controller_users');

// API SERVER
router.post('/server/signup', middlewareAuth, ctr_adm.serverSignup);
router.post('/server/login', ctr_adm.serverLogin);
router.post('/server/logout', middlewareAuth, ctr_adm.serverLogout);
router.get('/server',middlewareAuth, ctr_adm.serverUsersGet);
router.get('/server/:id', middlewareAuth, ctr_adm.serverUserGet);
router.put('/server/:id',middlewareAuth, ctr_adm.serverUserPut);
router.put('/server/lock', ctr_adm.serverUserLock);
router.put('/server/unlock', middlewareAuth, ctr_adm.serverUserUnlock);
router.delete('/server', middlewareAuth, ctr_adm.serverUserDelete);


// API CLIENT
router.post('/client/signup', ctr_users.clientSignup);
router.post('/client/login', ctr_users.clientLogin);
router.post('/client/logout', ctr_users.clientLogout);
router.get('/client/:id', ctr_users.clientUserGet);
router.put('/client/:id', ctr_users.clientUserPut);
router.delete('/client/:id', ctr_users.clientUserDelete);

module.exports = router;
