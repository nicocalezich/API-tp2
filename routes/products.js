const express = require('express');
const router = express.Router();
const { insertProduct } = require('../controllers/product.controller.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respuesta desde /products');
});

router.post('/', insertProduct)

module.exports = router;
