const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.post("/notes", noteController.new);
router.get("/notes/:id", noteController.note_detail);
router.put("/notes/:id", noteController.note_update);
router.delete("/notes/:id", noteController.note_delete);

module.exports = router;
