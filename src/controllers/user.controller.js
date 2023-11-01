const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAllUsers = async (_req, res) => {
  const { codeStatus, data } = await userService.getAllUsers();
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { codeStatus, data } = await userService.getUserById(id);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const createUser = async (req, res) => {
  const { body } = req;
  const { codeStatus, data } = await userService.createUser(body);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  const { codeStatus, data } = await userService.deleteUser(id);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};