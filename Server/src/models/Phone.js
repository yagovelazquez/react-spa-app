const { Model, DataTypes } = require("sequelize");
const Joi = require("joi");

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
        tableName: "user_phones",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
}

function validatePhone(phone, action) {
  const phoneKey = Joi.string().required();

  let keys = {
    phone: phoneKey,
    primaryPhone: Joi.boolean().required(),
    type: Joi.string().valid("Personal", "Business", "Other").required(),
  };

  if (action === "UPDATE") {
    keys.oldPhone = phoneKey;
  }

  if (action === "DELETE") {
    keys = { phone: phoneKey };
  }

  let schema = Joi.object().keys(keys);

  const validation = schema.validate(phone);

  return validation;
}

module.exports = { Phone, validatePhone };
