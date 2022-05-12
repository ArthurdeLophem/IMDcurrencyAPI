const User = require('../models/User');

const signup = async (req, res, next) => {
    console.log(req.body);

    const emailExists = await User.findOne({ email: req.body.email })
    const userExists = await User.findOne({ username: req.body.username })
    if (emailExists) {
        res.json({ success: false, statusCode: 500, errorMessage: "email already exists" });
    } else if (userExists) {
        res.json({ success: false, statusCode: 500, errorMessage: "username already exists" });
    } else {
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: await User.encryptPassword(req.body.password),
            coins: 0
        });

        const savedUser = await user.save(user);
        console.log(savedUser);



        user.save(err => {
            if (err) {
                res.json({ success: false, statusCode: 500, errorMessage: err });
            }
            res.json({ success: true, statusCode: 200, message: savedUser });
        })
    }
}

const login = async (req, res, next) => {
    console.log(req.body);
    const userExists = await User.findOne({ email: req.body.email })

    if (!userExists) {
        res.json({ error: "user doesn't exist" })
    }
    else if (userExists) {
        const matchPw = await User.decryptPassword(req.body.password, userExists.password)
        console.log(matchPw)
        if (!matchPw) {
            res.json({ error: "password mismatch" })
        }
        else {
            res.json({ status: "logged in" })
        }
    }
}

module.exports.signup = signup;
module.exports.login = login;