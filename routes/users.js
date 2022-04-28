const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/auth');
const leaderboardController = require('../controllers/leaderboard');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/v1/signup', authenticationController.signup);
router.post('/api/v1/login', authenticationController.login);
router.get('/api/v1/leaderboard', leaderboardController.getLeaderboard);

module.exports = router;
