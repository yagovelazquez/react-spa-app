const { Model, DataTypes } = require("sequelize");

class Email extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        email: {
          type: DataTypes.STRING,
          set(value) {
            this.setDataValue("email", value.toLowerCase());
          },
        },
        primaryEmail: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "user_emails",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
}

module.exports = Email;
