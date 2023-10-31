const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieTable = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return CategorieTable;
};

module.exports = CategorieSchema;