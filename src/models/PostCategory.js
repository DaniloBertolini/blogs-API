const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define('PostCategory', {}, {
    timestamps: false,
    underscored: true,
  });

  PostCategorieTable.associate = ({ BlogPost, Categorie }) => {
    BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostCategorieTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    Categorie.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategorieTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategorieTable;
};

module.exports = PostCategorieSchema;