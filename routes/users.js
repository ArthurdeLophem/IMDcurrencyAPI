const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authenticationController.signup);
router.post('/login', authenticationController.login);

module.exports = router;
