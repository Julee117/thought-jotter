const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const passport = require('passport');
const passportService = require('../config/passport');

const requireAuth = passport.authenticate('jwt', {session: false});

router.get("/notes", requireAuth, noteController.all_notes);
router.post("/notes", requireAuth, noteController.new);
router.get("/notes/:id", requireAuth, noteController.note_detail);
router.put("/notes/:id/update", requireAuth, noteController.note_update);
router.delete("/notes/:id", requireAuth, noteController.note_delete);

module.exports = router;
