const User = require('../../../models/api/v1/User');
const JWT = require('jsonwebtoken');

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

        let token = JWT.sign({
            uid: user._id,
            username: req.username
        }, "secret",
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            });

        user.token = token;

        await user.save().then(result => {
            res.json({
                success: true,
                statusCode: 200,
                message: user
            });
        }).catch(err => { console.log(err) })
    }
}

const login = async (req, res, next) => {
    console.log(req.body);
    const userExists = await User.findOne({
        $or: [
            {
                email: req.body.email
            },
            {
                username: req.body.email
            }
        ]
    })

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

            let token = JWT.sign({
                uid: userExists._id,
                username: userExists.username
            }, "secret",
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                });

            userExists.token = token;
            userExists.save();

            res.json({
                status: 204,
                body: {
                    status: "success",
                    message: "succesfully loged in redirection imminent"
                },
            })
        }
    }
}

module.exports.signup = signup;
module.exports.login = login;