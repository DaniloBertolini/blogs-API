const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategorieTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategorieTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostCategorieTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategorieTable;
};

module.exports = PostCategorieSchema;