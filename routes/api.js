const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.post("/notes", noteController.new);

module.exports = router;
