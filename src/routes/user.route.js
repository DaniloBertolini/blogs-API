const route = require('express').Router();
const { userController } = require('../controllers');
const authenticate = require('../middlewares/authenticate');

route.get('/', authenticate, userController.getAllUsers);
route.get('/:id', authenticate, userController.getUserById);
route.post('/', userController.createUser);

module.exports = route;