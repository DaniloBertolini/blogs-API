const route = require('express').Router();
const { userController } = require('../controllers');

route.post('/', userController.createUser);

module.exports = route;