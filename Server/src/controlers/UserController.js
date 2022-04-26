const { User } = require("../models/User");
const {Email} = require("../models/Email");
const { Preference } = require("../models/Preference");
const Sequelize = require("../database/index");
const nodemailer = require("nodemailer");
const config = require("config");

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

        const preferences = await Preference.create(
          {
            mattressId: 1,
            pillowId: 1,
            userId: user.id,
          },
          { transaction: t, raw: true }
        );

        return user;
      });

      let {
        updatedAt,
        createdAt,
        password: removedPass,
        ...newUser
      } = result.dataValues;
      const token = User.generateAuthToken({ name, lastName, id: result.id });
      newUser.expiresIn = token.expiresIn;

      const preferences = {
        roomPreferences: ["Non smoking room"],
        sleepPreferences: [
          "Signature mattress (medium firmness)",
          `Pillows - Feather`,
        ],
      };

      const interests = [];

      return res
        .header({ token: token.value })
        .json({ ...newUser, preferences, interests });
    } catch (error) {
      if (error.parent.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "Email already exists" });
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
      }
    );

    res.json({ message: "successfully updated!" });
  },
  async recoverPass(req, res) {
    const email = req.body.email;
    if (!email)
      return res.status(400).json({ error: "Please inform an valid email" });

    const dbUser = await Email.findOne({
      include: { association: "user", attributes: ["name", "lastName", "id"] },
      attributes: [],
      where: { email: email },
    });
    if (dbUser === null) {
      return res
        .status(404)
        .json({ error: "This Hush Sunrise account doesnt exist." });
    }

    const { name, lastName, id } = dbUser.user.dataValues;
    const token = User.generateAuthToken({ name, lastName, id });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: config.get("email"),
        pass: config.get("password"),
        clientId: config.get("clientId"),
        clientSecret: config.get("clientSecret"),
        refreshToken: config.get("refreshToken"),
      },
    });

    try {
      let info = await transporter.sendMail({
        from: "Hush Sunrise",
        to: email,
        subject: "Password Recover",
        text: "Hello world?",
        html: `<b>Please enter in the following link to change your password: <a href="http://localhost:3000/account/forgot-password/${token.value}">Change your password</a></b>`,
      });
    } catch (error) {
      return res.json({ message: "Could not send an email, please try again" });
    }

    res.json({
      message:
        "We have sent you an email with instructions to reset your password.",
    });
  },

  async index(req, res) {
    const user = await User.findByPk(req.user.id, {
      attributes: ["name", "lastName", "id"],
      include: [
        {
          association: "preferences",
          attributes: ["smokingRoom"],
          include: [
            {
              association: "mattress",
              attributes: ["mattressName"],
            },
            {
              association: "pillow",
              attributes: ["pillowName"],
            },
          ],
        },
        {
          association: "interests",
        },
      ],
    });

    const interests = user.interests.map((item) => {
      const { interest, group } = item.dataValues;
      return { interest, group };
    });

    const { name, lastName, id } = user.dataValues;
    const mattress = user.preferences.mattress.dataValues.mattressName;
    const pillow = user.preferences.pillow.get().pillowName;
    const smokingRoom = user.preferences.dataValues.smokingRoom;

    const preferences = {
      roomPreferences: [smokingRoom],
      sleepPreferences: [pillow, mattress],
    };

    res.json({ name, lastName, id, preferences, interests, expiresIn: req.user.exp });
  },
};
