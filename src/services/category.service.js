const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();
  return { codeStatus: 'SUCCESSFUL', data: categories };
};

const create = async (name) => {
  const category = await Category.create({ name });
  return { codeStatus: 'CREATED', data: category };
};

module.exports = {
  create,
  getAll,
};