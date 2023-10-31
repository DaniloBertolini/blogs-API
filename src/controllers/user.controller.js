const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createUser = async (req, res) => {
  const { body } = req;
  const { codeStatus, data } = await userService.createUser(body);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

module.exports = {
  createUser,
};