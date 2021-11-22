const express = require('express');
const router = express.Router();
const { insertProduct, getProduct, getAllProducts, deleteProduct, updateProduct } = require('../controllers/products.controller.js');

router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.post('/', insertProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;
