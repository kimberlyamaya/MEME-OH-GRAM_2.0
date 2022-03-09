const jwt = require('jsonwebtoken');

const secret = 'meme';
const expiration = '2h';

module.exports = {
    authMiddleware: function (req, res, next) {
        
        let token = req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return res.status(404).json({ message: 'Where`s your token?' });
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('This token doesn`t work.');
            return res.status(404).json({ message: 'invalid token! '});
        }

        return req
    },

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};