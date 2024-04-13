const express = require('express');
const router = express.Router();
const middlewareAuth = require('../middleware/auth');
const ctr_suiviUser = require('../controllers/controller_suiviUser');

router.post('/', ctr_suiviUser.suiviUserPost);
router.post('/:id', ctr_suiviUser.suviUserGet);

module.exports = router;