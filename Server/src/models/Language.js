const { Model, DataTypes } = require("sequelize");

class Language extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        language: DataTypes.STRING,
        country: DataTypes.STRING,
        preferredLanguage: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'user_languages',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

module.exports = Language;
