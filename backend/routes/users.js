const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const userRole = require('../middleware/userRole');
const ctr_adm = require('../controllers/controller_adm');
const ctr_members = require('../controllers/controller_members');

// API SERVER
router.post('/server/signup', userRole, ctr_adm.serverSignup);
router.post('/server/login', ctr_adm.serverLogin);
router.post('/server/logout', middlewareAuth, userRole, ctr_adm.serverLogout);
router.get('/server', userRole, ctr_adm.serverUsersGet);
router.get('/server/:requestId', ctr_adm.serverUserGet);
router.put('/server/:requestId',middlewareAuth, userRole, ctr_adm.serverUserPut);
router.put('/server/lock', middlewareAuth, userRole, ctr_adm.serverUserLock);
router.put('/server/unlock', middlewareAuth, userRole, ctr_adm.serverUserUnlock);
router.delete('/server', middlewareAuth, userRole, ctr_adm.serverUserDelete);

// API CLIENT
router.post('/member/signup', ctr_members.memberSignup);
router.post('/member/checkCode', ctr_members.memberCheckCode);
router.post('/member/resendCodeConfirmation', ctr_members.resendCodeConfirmation)
router.post('/member/login', ctr_members.memberLogin);
router.post('/member/role', middlewareAuth, ctr_members.memberRole)
router.post('/member/logout', middlewareAuth, ctr_members.memberLogout);
router.post('/member', middlewareAuth, ctr_members.memberUserGet);
router.put('/member/:id', middlewareAuth, ctr_members.memberUserPut);
router.delete('/member/:id', middlewareAuth, ctr_members.memberUserDelete);

module.exports = router;
