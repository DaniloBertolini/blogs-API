const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const login = async (email) => {
  const findUser = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });
  if (!findUser) return { codeStatus: 'BAD_REQUEST', data: { message: 'Invalid fields' } };

  const token = generateToken(findUser.dataValues);

  return { codeStatus: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  login,
};