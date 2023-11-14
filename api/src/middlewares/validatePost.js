const checkRequiredFields = require('../utils/checkRequiredFields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validatePost = (req, res, next) => {
  const { body } = req;
  const requiredFields = ['title', 'content', 'categoryIds'];
  const missingKeys = checkRequiredFields(body, requiredFields);

  if (missingKeys) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: missingKeys });
  }

  next();
};

module.exports = validatePost;