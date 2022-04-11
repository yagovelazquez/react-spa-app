const { Model, DataTypes } = require("sequelize");

class Phone extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        type: DataTypes.STRING,
        primaryPhone: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'user_phones',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

module.exports = Phone;
