const express = require('express');
const cardController = require('../controller/cardController');

const router = express.Router();

router.post('/', cardController.createCard);

module.exports = router;