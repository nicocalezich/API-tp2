const express = require('express');
const router = express.Router();
const { createUser, findByDni } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', findByDni);

router.post('/', createUser)

module.exports = router;
