const { Model, DataTypes } = require("sequelize");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function hashPassword(user) {
  return bcrypt.hash(user.password, 10).then((hash) => (user.password = hash));
}

function hashPasswordBulk(user) {
  let password = user.attributes.password;

  if (!password) return;

  return bcrypt
    .hash(password, 10)
    .then((hash) => (user.attributes.password = hash));
}

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        hooks: {
          beforeBulkUpdate: hashPasswordBulk,
          beforeCreate: hashPassword,
        },
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "userId", as: "Addresses" });
    this.hasMany(models.Email, { foreignKey: "userId", as: "Emails" });
    this.hasMany(models.Language, { foreignKey: "userId", as: "Languages" });
    this.hasMany(models.Phone, { foreignKey: "userId", as: "Phones" });
  }

  static generateAuthToken = function ({ id, name, lastName }) {
    const expiresIn = Math.floor(Date.now() / 1000) + 60 * 60;
    const token = jwt.sign(
      { id, name, lastName, exp: expiresIn },
      config.get("jwtPrivateKey")
    );

    return { value: token, expiresIn };
  };
}

module.exports = User;
