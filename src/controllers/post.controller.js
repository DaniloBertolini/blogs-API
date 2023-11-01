const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (req, res) => {
  const { codeStatus, data } = await postService.getAll();
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const create = async (req, res) => {
  const { body, user } = req;
  const { title, content, categoryIds } = body;
  const { codeStatus, data } = await postService.create({ title, content, categoryIds }, user);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

module.exports = {
  getAll,
  create,
};