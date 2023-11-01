const { postPutSchema } = require('./schemas');

const validatePostPut = (body) => {
  const { error } = postPutSchema.validate(body);
  console.log(error);
  if (error) return { codeStatus: 'BAD_REQUEST', data: { message: error.message } };
};

module.exports = validatePostPut;