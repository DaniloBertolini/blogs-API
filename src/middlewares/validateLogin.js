const checkRequiredFields = require('../utils/checkRequiredFields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateLogin = (req, res, next) => {
  const { body } = req;
  const requiredFields = ['email', 'password'];
  const missingKeys = checkRequiredFields(body, requiredFields);

  if (missingKeys) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: missingKeys });
  }

  next();
};

module.exports = validateLogin;