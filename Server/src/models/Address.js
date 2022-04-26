const Joi = require("joi");
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
        tableName: "user_addresses",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
}

function validateAddress(address, action) {
  const idKey = Joi.number().required();
  let keys = {
    street: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    number: Joi.string().required(),
    postal: Joi.string().required(),
    primaryAddress: Joi.boolean().required(),
    type: Joi.string().valid("Home", "Work", "Other").required(),
  };

  if (action === "UPDATE") {
    keys.id = idKey;
  }

  if (action === "DELETE") {
    keys = {id: idKey}
  }

  let schema = Joi.object().keys(keys);

  const validation = schema.validate(address);
  return validation;
}

module.exports = { Address, validateAddress };
