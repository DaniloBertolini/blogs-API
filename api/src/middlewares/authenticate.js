const jwt = require('jsonwebtoken');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const SECRET_KEY = process.env.JWT_SECRET;

function extractToken(token) {
  return token.split(' ')[1];
}

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === '') {
    return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Token not found' });
  }

  const token = extractToken(authorization);

  try {
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authenticate;