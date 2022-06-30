const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const {User} = require("../models/User");
const {Phone} = require("../models/Phone");
const {Subscription} = require("../models/Subscription");
const {Email} = require("../models/Email");
const {Address} = require("../models/Address");
const {Language} = require("../models/Language");
const {Mattress} = require("../models/Mattress")
const {Pillow} = require("../models/Pillow")
const {Preference} = require("../models/Preference")
const {Interest} = require('../models/Interest')
const {HotelResort} = require('../models/HotelResort')
const {Residence} = require('../models/Residence')
const {Retreat} = require('../models/Retreat')
const Users_Interests = require('../models/Users_Interests')

User.init(connection);
Subscription.init(connection);
Phone.init(connection);
Email.init(connection);
Address.init(connection);
Language.init(connection);
Mattress.init(connection);
Pillow.init(connection);
Preference.init(connection);
Interest.init(connection)
Interest.init(connection)
Users_Interests.init(connection)
HotelResort.init(connection)
Residence.init(connection)
Retreat.init(connection)

User.associate(connection.models);
Phone.associate(connection.models);
Email.associate(connection.models);
Address.associate(connection.models);
Language.associate(connection.models);
Mattress.associate(connection.models);
Pillow.associate(connection.models);
Preference.associate(connection.models);
Interest.associate(connection.models)
Users_Interests.associate(connection.models)
Subscription.associate(connection.models)

module.exports = connection;
