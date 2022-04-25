const User = require('../models/User');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    const user = new User({ username: username, email: email });;
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            "status": "success"
        })
    }).catch(err => {
        res.json({
            "status": "failed"
        })
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