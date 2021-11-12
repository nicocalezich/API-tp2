const express = require('express');
const router = express.Router();
const { createUser, findByDni } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/:dni', findByDni);

router.post('/', createUser)

module.exports = router;
