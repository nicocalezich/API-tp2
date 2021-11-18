const express = require('express');
const router = express.Router();
const { insertProduct } = require('../controllers/products.controller.js')

/* GET users listing. */
router.get('/', function(_req, res, _next) {
  res.send('get de productos');
});

router.post('/', insertProduct)

module.exports = router;
