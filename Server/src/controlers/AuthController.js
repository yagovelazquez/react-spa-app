const { User } = require("../models/User");
const Email = require("../models/Email");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

module.exports = {
  async login(req, res) {
    const { password, email } = req.body;
    const dbUser = await Email.findOne({
      include: {
        association: "user",
        attributes: ["name", "lastName", "password", "id"],
      },
      attributes: ["email"],
      where: { email: email },
    });

    if (dbUser === null) {
      return res.send("This Hush Sunrise account doesnt exist.");
    }

    const { name, lastName, password: dbPassword, id } = dbUser.user.dataValues;
    const validPassword = await bcrypt.compare(password, dbPassword);

    if (!validPassword)
      return res.status(400).json({ error: "Invalid password" });
    const token = User.generateAuthToken(id, name, lastName);
    return res
      .header({ token: token.value, expiresIn: token.expiresIn })
      .json({ name, lastName, id });
  },

  async getAuth(req,res) {
      res.json('Credentials approved')
  },

  validateCredentials(credentials) {
    const schema = Joi.object().keys({
      password: Joi.string().required(),
      email: Joi.string().required(),
    });

    return schema.validate(credentials);
  },
};
