const JWT = require('jsonwebtoken');

const tokenValidation = (req, res, next) => {
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = JWT.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();

}

module.exports = tokenValidation;