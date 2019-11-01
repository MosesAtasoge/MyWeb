const express = require('express');
const router = express.Router();
const uskupController = require('../controllers/uskupController');

router.get('/add-uskup', uskupController.getAddUskup);


module.exports = router;