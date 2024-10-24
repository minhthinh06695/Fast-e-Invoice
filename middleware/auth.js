// middleware/auth.js
const jwt = require('jsonwebtoken');
const secretKey = 'sss+3Y3BpD222zssh0';

const authenticateToken = (req, res, next) => {
    const token = req.headers['access-token'];

    console.log('access-token', token)

    if (!token) {
        return res.status(403).json({ message: 'Token required' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user; // attach user info to request
        next();
    });
};

module.exports = authenticateToken;
