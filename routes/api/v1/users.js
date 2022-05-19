const express = require('express');
const router = express.Router();
const authenticationController = require('../../../controllers/api/v1/auth');
const leaderboardController = require('../../../controllers/api/v1/leaderboard');
const auth = require('../../../middleware/auth')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authenticationController.signup);
router.post('/login', auth, authenticationController.login);
router.get('/leaderboard', auth, leaderboardController.getLeaderboard);

module.exports = router;
