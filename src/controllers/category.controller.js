const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
  const { codeStatus, data } = await categoryService.getAll();
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const create = async (req, res) => {
  const { name } = req.body;
  const { codeStatus, data } = await categoryService.create(name);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

module.exports = {
  create,
  getAll,
};