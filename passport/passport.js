const passport = require('passport');
const User = require('../models/user');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());