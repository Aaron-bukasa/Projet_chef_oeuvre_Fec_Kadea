const express = require('express');
const router = express.Router();
const ctr_dashboard = require('../controllers/controller_auth');

router.get('/', ctr_dashboard.dashboard);

module.exports = router;