const { categorySchema } = require('./schemas');

const validateCategory = (name) => {
  const { error } = categorySchema.validate({ name });
  if (error) return { codeStatus: 'BAD_REQUEST', data: { message: error.message } };
};

module.exports = validateCategory;