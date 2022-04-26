const { Model, DataTypes } = require("sequelize");
const Joi = require("joi");

class Users_Interests extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        userId: DataTypes.INTEGER,
        interestId: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: 'users_interests',
        timestamps: false
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "users" });
    this.belongsTo(models.Interest, { foreignKey: "interestId", as: "interests" });
  }

}





module.exports = Users_Interests;
