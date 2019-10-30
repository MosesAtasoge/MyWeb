const express = require('express');
const router = express.Router();
const tempatController = require('../controllers/tempatController');

router.get('/create-NamaTempat', tempatController.getAddNamaTempat);
router.get('/', tempatController.get_landing);

module.exports = router;