const route = require('express').Router();
const { userController } = require('../controllers');
const authenticate = require('../middlewares/authenticate');

route.get('/', authenticate, userController.getAllUsers);
route.post('/', userController.createUser);

module.exports = route;