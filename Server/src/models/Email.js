const Joi = require("joi");
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
        type: DataTypes.STRING,
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

function validateEmail(email, action) {
  const emailKey = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required()

  let keys = {
    email: emailKey,
    primaryEmail: Joi.boolean().required(),
    type: Joi.string().valid('Personal', 'Business', 'Other').required()
  };

  if (action === "UPDATE") {
    keys.oldEmail = emailKey;
  }

  if (action === "DELETE") {
    keys = {email: emailKey}
  }

  let schema = Joi.object().keys(keys);

  const validation = schema.validate(email);
  return validation;
}

module.exports = { Email, validateEmail };
