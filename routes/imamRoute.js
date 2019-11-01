const express = require('express');
const router = express.Router();
const imamController = require('../controllers/imamController')

router.get('/add-imam', imamController.getAddImam);
router.post('/add-imam/', imamController.postAddImam);

module.exports = router;
