const { Model, DataTypes } = require("sequelize");


class Mattress extends Model {
  static init(sequelize) {
    super.init(
      {
        mattressName: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'mattresses',
        timestamps: false,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Preference, {as: 'preferences', foreignKey: 'mattressId'});
  }
}


module.exports = {Mattress};
