const express = require('express');
const router = express.Router();
const ctr_statistic = require('../controllers/controller_statistic');

router.get('/', ctr_statistic.statisticGet);

module.exports = router;