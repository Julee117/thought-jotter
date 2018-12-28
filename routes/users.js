const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const passportService = require('../config/passport');

const requireLogin = passport.authenticate('local', { session: false });

router.post("/signup", userController.signup);
router.post("/login", requireLogin, userController.login);
router.get("/users", userController.all_users);
router.delete("/users/:id", userController.user_delete);

module.exports = router;
