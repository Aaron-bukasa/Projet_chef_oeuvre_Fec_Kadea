const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const authFont = require('../middleware/authFont');
const ctr_adm = require('../controllers/controller_adm');
const ctr_members = require('../controllers/controller_members');

// API SERVER
router.post('/server/signup', middlewareAuth, ctr_adm.serverSignup);
router.post('/server/login', ctr_adm.serverLogin);
router.post('/server/logout', middlewareAuth, ctr_adm.serverLogout);
router.get('/server',middlewareAuth, ctr_adm.serverUsersGet);
router.get('/server/:requestId', ctr_adm.serverUserGet);
router.put('/server/:requestId',middlewareAuth, ctr_adm.serverUserPut);
router.put('/server/lock', middlewareAuth, ctr_adm.serverUserLock);
router.put('/server/unlock', middlewareAuth, ctr_adm.serverUserUnlock);
router.delete('/server', middlewareAuth, ctr_adm.serverUserDelete);


// API CLIENT
router.post('/member/signup', ctr_members.memberSignup);
router.post('/member/checkCode', ctr_members.memberCheckCode);
router.post('/member/resendCodeConfirmation', ctr_members.resendCodeConfirmation)
router.post('/member/login', ctr_members.memberLogin);
router.post('/member/logout', middlewareAuth, ctr_members.memberLogout);
router.get('/member/:id', middlewareAuth, ctr_members.memberUserGet);
router.put('/member/:id', middlewareAuth, ctr_members.memberUserPut);
router.delete('/member/:id', middlewareAuth, ctr_members.memberUserDelete);

module.exports = router;
