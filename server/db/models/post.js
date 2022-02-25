const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsToMany(models.Tag, { through: models.TagPost, foreignKey: 'postId' });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    img: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
