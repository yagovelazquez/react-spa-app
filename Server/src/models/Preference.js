const { Model, DataTypes } = require("sequelize");
const Joi = require("joi");

class Preference extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        pillowId: DataTypes.INTEGER,
        mattressId: DataTypes.INTEGER,
        smokingRoom: DataTypes.ENUM("Smoking room", "Non smoking room"),
      },
      {
        sequelize,
        tableName: "user_preferences",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pillow, { foreignKey: "pillowId", as: "pillow" });
    this.belongsTo(models.Mattress, { foreignKey: "mattressId", as: "mattress" });
    this.belongsTo(models.User, { foreignKey: "userId", as: "User" });
  }
}

function validateSleepPref(sleepPref) {
    let schema = Joi.object().keys({
        mattressName: Joi.string().required(),
        pillowName: Joi.string().required()
    });
    const validation = schema.validate(sleepPref);
    return validation;
  }

  
function validateRoomPref(smokingPref) {
    let schema = Joi.object().keys({
        smokingRoom: Joi.string().required(),
    });
    const validation = schema.validate(smokingPref);
    return validation;
  }

module.exports = {Preference, validateSleepPref, validateRoomPref};
