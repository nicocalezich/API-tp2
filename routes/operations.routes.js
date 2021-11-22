const express = require('express');
const router = express.Router();
const { newSale } = require('../controllers/operations.controller');

router.post('/sale', newSale)

module.exports = router;
