const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (_req, res) => {
  const { codeStatus, data } = await postService.getAll();
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { codeStatus, data } = await postService.getById(id);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const create = async (req, res) => {
  const { body, user } = req;
  const { title, content, categoryIds } = body;
  const { codeStatus, data } = await postService.create({ title, content, categoryIds }, user);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const update = async (req, res) => {
  const { body, user } = req;
  const { id } = req.params;
  const { title, content } = body;
  const { codeStatus, data } = await postService.update({ title, content }, id, user);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const exclude = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const { codeStatus, data } = await postService.exclude(id, user);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  exclude,
};