const User = require('../models/User');

getLeaderboard = async (req, res) => {
    const results = await User.find({}).sort({ coins: -1 })
    res.json({
        "status": "success",
        "data": {
            "leaderboard": results
        }
    })
}
module.exports.getLeaderboard = getLeaderboard;