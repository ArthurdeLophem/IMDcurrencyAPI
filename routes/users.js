var express = require('express');
var router = express.Router();
const authenticationController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authenticationController.signup);

module.exports = router;
