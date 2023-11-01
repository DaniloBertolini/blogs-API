const route = require('express').Router();
const authenticate = require('../middlewares/authenticate');

const { postController } = require('../controllers');
const validatePost = require('../middlewares/validatePost');

route.get('/', authenticate, postController.getAll);
route.get('/:id', authenticate, postController.getById);
route.post('/', authenticate, validatePost, postController.create);

module.exports = route;