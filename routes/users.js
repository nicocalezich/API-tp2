const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respuesta desde /users');
});

router.post('/', createUser)

module.exports = router;
