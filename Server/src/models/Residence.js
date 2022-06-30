const Joi = require("joi");
const { Model, DataTypes } = require("sequelize");

class Residence extends Model {
  static init(sequelize) {
    super.init(
      {
        continent: {
          type: DataTypes.STRING,
        },
        property: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        tableName: "residences",
        timestamps: false,
      }
    );
  }
}

module.exports = { Residence  };
