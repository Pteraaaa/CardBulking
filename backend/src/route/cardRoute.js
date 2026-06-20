const express = require('express');
const cardController = require('../controller/cardController');

const router = express.Router();

router.post('/', cardController.createCard);
router.get('/', cardController.viewAllCards);

module.exports = router;