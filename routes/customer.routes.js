const express = require('express');
const router = express.Router();
const {createCustomer, getCustomer} = require('../controllers/customers.controller')

/* GET users listing. */
router.get('/:dni', getCustomer);

router.post('/', createCustomer)

module.exports = router;