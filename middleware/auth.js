const JWT = require('jsonwebtoken');

const tokenValidation = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        let decoded = JWT.verify(token, "secret")
        req.user = decoded;
    } catch (error) {
        return res.status(403).send(error);
    }
    return next();
}

module.exports = tokenValidation;