const { Model, DataTypes } = require("sequelize");

const Joi = require("joi");

class Subscription extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        subSurveys: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        subResidences: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        subOffers: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
 
      },
      {
        sequelize,
        tableName: "user_subscriptions",
        timestamps: false,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
}

function validateSubscription(subscriptions) {


  let keys = {

    subSurveys: Joi.boolean().required(),
    subResidences: Joi.boolean().required(),
    subOffers: Joi.boolean().required(),

  };

  let schema = Joi.object().keys(keys);

  const validation = schema.validate(subscriptions);

  return validation;
}

module.exports = { Subscription, validateSubscription };
