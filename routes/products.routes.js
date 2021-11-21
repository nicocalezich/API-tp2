const express = require('express');
const router = express.Router();
const { insertProduct, getProduct, getProductStock, addStock } = require('../controllers/products.controller.js');

router.get('/:id', getProduct);
router.get('/stock/:id',getProductStock)
router.post('/', insertProduct)
router.post('/stock', addStock)

module.exports = router;
