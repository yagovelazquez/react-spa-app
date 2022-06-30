const Joi = require("joi");
const { Model, DataTypes } = require("sequelize");

class HotelResort extends Model {
  static init(sequelize) {
    super.init(
      {
        continent: {
          type: DataTypes.STRING,
        },
        property: {
          type: DataTypes.STRING,
        },
        status: {
          type: DataTypes.ENUM("Open", "Closed", "New Upcoming Opening"),
          defaultValue: "Open",
        },
        openingDate: {
          type: DataTypes.STRING,
        },
        dinningOptions: {
          type: DataTypes.NUMBER,
        },
        spa: {
          type: DataTypes.BOOLEAN,

          defaultValue: false,
        },
        pool: {
          type: DataTypes.BOOLEAN,

          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: "hotel_resorts",
        timestamps: false,
      }
    );
  }
}

module.exports = { HotelResort  };
