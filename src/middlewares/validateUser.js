const { userSchema } = require('../services/validations/schemas');

const validateUser = (body) => {
  const { error } = userSchema.validate(body);
  if (error) return { codeStatus: 'BAD_REQUEST', data: { message: error.message } };
};

module.exports = validateUser;