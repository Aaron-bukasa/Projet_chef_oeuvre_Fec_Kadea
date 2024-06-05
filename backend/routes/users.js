const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const userRole = require('../middleware/userRole');
const ctr_adm = require('../controllers/controller_adm');
const ctr_members = require('../controllers/controller_members');

// API SERVER
router.post('/server/signup', ctr_adm.serverSignup);
router.post('/server/login', ctr_adm.serverLogin);
router.post('/server/logout', middlewareAuth, ctr_adm.serverLogout);
router.get('/server', ctr_adm.serverUsersGet);
router.get('/server/data', ctr_adm.serverUsersJson);
router.get('/server/create', ctr_adm.serverUserCreate);
router.get('/server/:requestId', middlewareAuth, userRole, ctr_adm.serverUserGet);
router.get('/server/data/:requestId', middlewareAuth, userRole, ctr_adm.serverUserGetJson);
router.put('/server/:requestId', middlewareAuth, userRole, ctr_adm.serverUserPut);
router.delete('/server/:requestId', middlewareAuth, userRole, ctr_adm.serverUserDelete);
router.post('/', middlewareAuth, userRole, ctr_adm.serverUsersEmpty);

// API CLIENT
router.post('/member/signup', ctr_members.memberSignup);
router.post('/member/checkCode', ctr_members.memberCheckCode);
router.post('/member/resendCodeConfirmation', ctr_members.resendCodeConfirmation)
router.post('/member/login', ctr_members.memberLogin);
router.post('/member/role', middlewareAuth, ctr_members.memberRole)
router.post('/member/logout', middlewareAuth, ctr_members.memberLogout);
router.get('/member/:requestId', ctr_members.memberUserGet);
router.put('/member/:id', middlewareAuth, ctr_members.memberUserPut);
router.delete('/member/:id', middlewareAuth, ctr_members.memberUserDelete);

module.exports = router;
