const express = require('express');
const tcgController = require('../controller/tcgController');

const router = express.Router();

router.post('/', tcgController.createTCG);

module.exports = router;