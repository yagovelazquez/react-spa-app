const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const {User} = require("../models/User");
const Phone = require("../models/Phone");
const Email = require("../models/Email");
const Address = require("../models/Address");
const Language = require("../models/Language");

User.init(connection);
Phone.init(connection);
Email.init(connection);
Address.init(connection);
Language.init(connection);

User.associate(connection.models);
Phone.associate(connection.models);
Email.associate(connection.models);
Address.associate(connection.models);
Language.associate(connection.models);

module.exports = connection;
