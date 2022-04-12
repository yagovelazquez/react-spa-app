const { User } = require("../models/User");
const Email = require("../models/Email");
const Sequelize = require("../database/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

module.exports = {
  async store(req, res) {
    const { name, lastName, password, email } = req.body;

    try {
      const result = await Sequelize.transaction(async (t) => {
        const user = await User.create(
          { name, lastName, password: password },
          { transaction: t }
        );

        await Email.create(
          { email: email, userId: user.id },
          { transaction: t }
        );

        return user;
      });

      const token = User.generateAuthToken({ name, lastName, id: result.id });

      return res
        .header({ token: token.value, expiresIn: token.expiresIn })
        .json(result);
    } catch (error) {
      if (error.parent.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Email already exists" });
      }

      throw new Error(error);
    }
  },

  async update(req, res) {
    const result = await User.update(
      { ...req.body },
      {
        where: {
          id: req.user.id,
        },
        returning: true,
      }
    );

    res.json(result.filter(Boolean));
  },

  async index(req, res) {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });
    return res.json(user);
  },
};
