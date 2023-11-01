const route = require('express').Router();
const authenticate = require('../middlewares/authenticate');

const { postController } = require('../controllers');
const validatePost = require('../middlewares/validatePost');
const validatePostPut = require('../middlewares/validatePostPut');

route.get('/', authenticate, postController.getAll);
route.get('/search', authenticate, postController.search);
route.get('/:id', authenticate, postController.getById);
route.post('/', authenticate, validatePost, postController.create);
route.put('/:id', authenticate, validatePostPut, postController.update);
route.delete('/:id', authenticate, postController.exclude);

module.exports = route;