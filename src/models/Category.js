const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieTable = sequelize.define('Category', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return CategorieTable;
};

module.exports = CategorieSchema;