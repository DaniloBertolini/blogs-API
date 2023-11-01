const jwt = require('jsonwebtoken');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const SECRET_KEY = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === '') {
    return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(authorization, SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authenticate;