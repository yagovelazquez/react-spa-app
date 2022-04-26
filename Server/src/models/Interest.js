const { Model, DataTypes } = require("sequelize");
const Joi = require("joi");

class Interest extends Model {
  static init(sequelize) {
    super.init(
      {
        interest: DataTypes.STRING,
        group: DataTypes.ENUM(
          "food & drink",
          "health & wellness",
          "travel & lifestyle"
        ),
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "interestId",
      through: "Users_Interests",
      as: "users",
    });
    this.hasMany(models.Users_Interests, {
      foreignKey: "interestId",
      as: "users_interests",
    });
  }
}

function validateUserInterest(data) {
  let schema = Joi.object().keys({
    interest: Joi.string().required(),
    group: Joi.string()
  });
  const validation = schema.validate(data);
  return validation;
}

module.exports = { Interest, validateUserInterest };
