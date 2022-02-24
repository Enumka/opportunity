const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Post, { through: models.TagPost, foreignKey: 'tagId' });
    }
  }
  Tag.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};
