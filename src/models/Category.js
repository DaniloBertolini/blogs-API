const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieTable = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  // CategorieTable.associate = (models) => {
  //   models.PostCategory
  // }

  return CategorieTable;
};

module.exports = CategorieSchema;