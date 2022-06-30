const { User } = require("../models/User");
const {Email} = require("../models/Email");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { findByPk } = require("../models/Email");

module.exports = {
  async login(req, res) {
    try {
      const { password, email } = req.body;
    const dbUser = await Email.findOne({
      include: {
        association: "user",
        attributes: ["name", "title", "lastName", "password", "id"],
        include: [
          {
            association: "preferences",
            attributes: ["smokingRoom"],
            include: [
              {
                association: "mattress",
                attributes: ["mattressName"],
              },
              { association: "pillow", attributes: ["pillowName"] },
            ],
          },
          { association: "interests" },
          { association: "Phones", attributes: ["primaryPhone", "phone", "countryCode", "type"] },
          {
            association: "Addresses",
            attributes: {exclude: ["updatedAt", "createdAt", "userId"]}
          },

          {
            association: "Languages",
            attributes: ["country", "preferredLanguage"]
          },
          {
            association: "Subscriptions",
             attributes: { exclude: ["userId", "id"] },
          },
          
        ],
      },
      attributes: ["email", "primaryEmail", "type"],
      where: { email: email },
    });

 

  

  

    if (dbUser === null) {
      return res
        .status(401)
        .json({ error: "This Hush Sunrise account doesnt exist." });
    }

    if (dbUser.dataValues?.primaryEmail === false) {
      return res.status(409).json({error: "Please log in with your primary email"})
    }

    const interests = dbUser.user.interests.map((item) => {
      const { interest, group } = item.dataValues;
      return { interest, group };
    });

    const { name, lastName, password: dbPassword, id, title } = dbUser.user.dataValues;
    const validPassword = await bcrypt.compare(password, dbPassword);

    if (!validPassword)
      return res.status(401).json({ error: "Invalid password" });
    const token = User.generateAuthToken({ id, name, lastName });


    const dbEmails = await Email.findAll({
      where: { userId: id },
      attributes: ["email", "primaryEmail", "type"],
    });

    const mattress = dbUser.user.preferences.mattress.dataValues.mattressName;
    const pillow = dbUser.user.preferences.pillow.get().pillowName;
    const smokingRoom = dbUser.user.preferences.dataValues.smokingRoom;

    const preferences = {
      roomPreferences: [smokingRoom],
      sleepPreferences: [pillow, mattress],
    };

    return res
      .header({ token: token.value })
      .json({
        name,
        lastName,
        id,
        title,
        languages: dbUser.user.Languages,
        phones: dbUser.user.Phones,
        emails: dbEmails,
        expiresIn: token.expiresIn,
        addresses: dbUser.user.Addresses,
        subscriptions: dbUser.user.Subscriptions,
        preferences,
        interests,
      });
      
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
    
  },

  async getAuth(req, res) {
    res.json({ message: "Credentials Approved" });
  },

  validateCredentials(credentials) {
    const schema = Joi.object().keys({
      password: Joi.string().required(),
      email: Joi.string().required(),
    });

    return schema.validate(credentials);
  },
};
