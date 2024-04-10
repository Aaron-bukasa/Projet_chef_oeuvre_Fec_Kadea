const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ctr_dashboard = require('../controllers/controller_dashboard');


/* GET home page. */
router.get('/', auth, ctr_dashboard.dashboard);

module.exports = router;
