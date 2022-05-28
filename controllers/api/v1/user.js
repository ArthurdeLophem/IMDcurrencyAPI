const User = require('../../../models/api/v1/User');

getUser = async (req, res) => {
    const results = await User.find({
        $or: [
            {
                email: req.body.email
            },
            {
                username: req.body.email
            }
        ]
    })
    res.json({
        "status": "success",
        "data": {
            "userId": results
        }
    })
}
module.exports.getUser = getUser;
