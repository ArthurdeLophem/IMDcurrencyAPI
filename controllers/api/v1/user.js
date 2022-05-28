const User = require('../../../models/api/v1/User');

getUser = async (req, res) => {
    const { user } = req.params;
    console.log(user)
    const results = await User.find({
        $or: [
            {
                email: user
            },
            {
                username: user
            }
        ]
    })
    console.log(results[0])

    res.json({
        "status": "success",
        "data": {
            "userId": results[0]._id,
            "email": results[0].email,
            "username": results[0].username
        }
    })
}
module.exports.getUser = getUser;
