const express = require('express');
const router = express.Router();
const { createUser, getUser } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/:dni', getUser);

router.post('/', createUser)

module.exports = router;
