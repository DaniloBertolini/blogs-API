const validateUser = require('../middlewares/validateUser');
const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },

  });
  return { codeStatus: 'SUCCESSFUL', data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) return { codeStatus: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { codeStatus: 'SUCCESSFUL', data: user };
};

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
  getAllUsers,
  getUserById,
};