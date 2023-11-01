const route = require('express').Router();
const authenticate = require('../middlewares/authenticate');

const { categoryController } = require('../controllers');

route.get('/', authenticate, categoryController.getAll);
route.post('/', authenticate, categoryController.create);

module.exports = route;