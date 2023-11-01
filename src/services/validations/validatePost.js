const { postSchema } = require('./schemas');

const validatePost = (body) => {
  const { error } = postSchema.validate(body);
  if (error) return { codeStatus: 'BAD_REQUEST', data: { message: error.message } };
};

module.exports = validatePost;