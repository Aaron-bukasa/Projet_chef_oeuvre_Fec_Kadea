const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_suiviUser = require('../controllers/controller_suiviUser');

router.post('/',middlewareAuth, ctr_suiviUser.suiviUserPost);
router.post('/:id',middlewareAuth, ctr_suiviUser.suviUserGet);

module.exports = router;