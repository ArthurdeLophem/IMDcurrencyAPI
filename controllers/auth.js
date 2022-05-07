const User = require('../models/User');
const bcrypt = require('bcrypt');

const signup = (req, res) => {
    let user = new User();

    user.username = req.body.username;
    let getPassword = req.body.password;
    user.password = bcrypt.hash(getPassword, 12);
    user.email = req.body.email;
    user.coins = 0;

    user.save((err, doc) => {
        if (err) {
            res.json({
                "status": "success"
            })
        }
        if (!err) {
            console.log(err);
            res.json({
                "status": "failed"
            })
        };
    })
}

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        res.json({
            "status": "success",
            "data": {
                "user": result
            }
        })
    }).catch(err => {
        res.json({
            "status": "failed",
            "message": err
        })
    });
}

module.exports.signup = signup;
module.exports.login = login;