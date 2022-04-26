const { Model, DataTypes } = require("sequelize");
const Joi = require("joi")

class Language extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        country: DataTypes.STRING,
        preferredLanguage: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'user_language',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

function validateLanguage(language) {
 

  const keys = {
    preferredLanguage: Joi.string().required(),
    country: Joi.string().required()
  };


  const schema = Joi.object().keys(keys);

  const validation = schema.validate(language);
  return validation;
}

module.exports = {Language, validateLanguage};
