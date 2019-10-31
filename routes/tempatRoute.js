const express = require('express');
const router = express.Router();
const tempatController = require('../controllers/tempatController');

router.get('/create-NamaTempat', tempatController.getAddNamaTempat);

module.exports = router;