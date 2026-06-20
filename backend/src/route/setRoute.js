const express = require('express');
const setController = require('../controller/setController');

const router = express.Router();

router.post('/', setController.createSet);
router.get('/', setController.viewAllSet);

module.exports = router;