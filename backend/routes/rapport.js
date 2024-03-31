const express = require('express');
const router = express.Router();
const ctr_rapport = require('../controllers/controller_rapport');

router.get('/', ctr_rapport.rapportGet);

module.exports = router;