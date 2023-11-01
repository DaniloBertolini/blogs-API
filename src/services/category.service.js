const { Category } = require('../models');
const validateCategory = require('./validations/validateCategory');

const getAll = async () => {
  const categories = await Category.findAll();
  return { codeStatus: 'SUCCESSFUL', data: categories };
};

const create = async (name) => {
  const error = validateCategory(name);
  if (error) return error;

  const category = await Category.create({ name });
  return { codeStatus: 'CREATED', data: category };
};

module.exports = {
  create,
  getAll,
};