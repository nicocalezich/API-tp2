const express = require('express');
const router = express.Router();
const { createUser, getUser, login } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/:dni', getUser);

router.post('/', createUser)

router.post('/login', login)

module.exports = router;
