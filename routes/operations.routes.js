const express = require('express');
const router = express.Router();
const { newSale, createCustomer, getCustomer } = require('../controllers/operations.controller');

router.post('/sale', newSale)
router.post('/customer', createCustomer)
router.get('/customer/:dni', getCustomer)

module.exports = router;
