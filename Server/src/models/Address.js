const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        country: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING,
        postal: DataTypes.STRING,
        type: DataTypes.STRING,
        primaryAddress: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'user_addresses',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

module.exports = Address;
