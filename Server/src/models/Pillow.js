const { Model, DataTypes } = require("sequelize");

class Pillow extends Model {
  static init(sequelize) {
    super.init(
      {
        pillowName: {
          type: DataTypes.STRING,
          get() {
            const rawValue = this.getDataValue("pillowName");
            return `Pillows - ${rawValue}`;
          },
        },
      },
      {
        sequelize,
        tableName: "pillows",
        timestamps: false,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Preference, {
      as: "references",
      foreignKey: "pillowId",
    });
  }
}

module.exports = { Pillow };
