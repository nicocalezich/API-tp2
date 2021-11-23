const express = require('express');
const router = express.Router();
const { setDiscounts } = require('../controllers/settings.controller');

router.post('/discounts', setDiscounts)

module.exports = router;