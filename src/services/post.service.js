const validatePostPut = require('./validations/validatePostPut');
const db = require('../models');
const { BlogPost, User, Category, PostCategory } = require('../models');
const validatePost = require('./validations/validatePost');

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { codeStatus: 'SUCCESSFUL', data: allPosts };
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { codeStatus: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  return { codeStatus: 'SUCCESSFUL', data: post };
};

const create = async ({ title, content, categoryIds }, user) => {
  const t = await db.sequelize.transaction();
  try {
    const post = await BlogPost.create({
      title, content, userId: user.id, published: Date.now(), updated: Date.now(),
    }, { transaction: t });

    await Category.findAll({ where: { id: categoryIds } });
    const error = validatePost({ title, content, categoryIds });
    if (error) return error;

    await Promise.all(categoryIds.map((categoryId) =>
      PostCategory.create({ postId: post.id, categoryId }, { transaction: t })));
    await t.commit();
    return { codeStatus: 'CREATED', data: post };
  } catch (err) {
    await t.rollback();
    return { codeStatus: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
};

const update = async ({ title, content }, id, user) => {
  const t = await db.sequelize.transaction();
  try {
    const post = await BlogPost.findOne({ where: { id } });
    if (!post) return { codeStatus: 'NOT_FOUND', data: { message: 'Post does not exist' } };
    if (post.userId !== user.id) {
      return { codeStatus: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } }; 
    }

    const error = validatePostPut({ title, content });
    if (error) return error;

    await BlogPost.update({ title, content }, { where: { id } }, { transaction: t });
    const newPost = await BlogPost.findOne({ where: { id },
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }] });

    await t.commit();
    return { codeStatus: 'SUCCESSFUL', data: newPost };
  } catch (err) {
    await t.rollback();
    return { codeStatus: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
};

module.exports = {
  getAll,
  create,
  getById,
  update,
};