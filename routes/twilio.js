const express = require('express');
const router = express.Router();
const twilioController = require('../controllers/twilioController');

router.post("/text", twilioController.text);

module.exports = router;
