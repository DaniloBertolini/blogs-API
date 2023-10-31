const validateUser = require('../middlewares/validateUser');
const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const createUser = async (body) => {
  const { email } = body;
  const error = validateUser(body);
  if (error) return error;

  const findUser = await User.findOne({
    where: { email },
  });

  if (findUser) return { codeStatus: 'CONFLICT', data: { message: 'User already registered' } };

  await User.create(body);

  const token = generateToken(body);

  return { codeStatus: 'CREATED', data: { token } };
};

module.exports = {
  createUser,
};