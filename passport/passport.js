const passport = require('passport');
const User = require('../models/user');
const authController = require('../controllers/auth');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy({
    usernameField: 'email', passReqToCallback: true
}, authController.signup()));