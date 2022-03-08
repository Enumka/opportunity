const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, { foreignKey: 'roleId' });
      this.hasMany(models.Post, { foreignKey: 'userId' });
      this.belongsToMany(models.Skill, { through: models.UserSkill, foreignKey: 'userId' });
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    img: DataTypes.TEXT,
    telephone: DataTypes.STRING,
    body: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    roleId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
