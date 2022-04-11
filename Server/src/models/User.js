const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'userId', as: 'Addresses' });
    this.hasMany(models.Email, { foreignKey: 'userId', as: 'Emails' });
    this.hasMany(models.Language, { foreignKey: 'userId', as: 'Languages' });
    this.hasMany(models.Phone, { foreignKey: 'userId', as: 'Phones' });
  }
}

module.exports = User;
