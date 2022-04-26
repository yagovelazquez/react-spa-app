const { Email } = require("../models/Email");
const Sequelize = require("../database/index");


module.exports = {
  async storeEmail(req, res) {
    const userId = req.user.id;
    const { email, primaryEmail, type } = req.body;
    try {
      if (primaryEmail) {
        const result = await Sequelize.transaction(async (t) => {
          await Email.update(
            { primaryEmail: false },
            { where: { userId }, transaction: t }
          );
          const newEmailDb = await Email.create(
            { email, primaryEmail, userId, type },
            { transaction: t }
          );

          const {
            id,
            userId: userIdDb,
            updatedAt,
            createdAt,
            ...newEmail
          } = newEmailDb.dataValues;
          return newEmail;
        });

        return res.json(result);
      }

      const createdEmailDb = await Email.create({
        email,
        primaryEmail,
        userId,
        type
      });

      const {
        userId: userIdDb,
        id,
        updatedAt,
        createdAt,
        ...createdEmail
      } = createdEmailDb.dataValues;
      return res.json(createdEmail);
    } catch (error) {
      if (error.original.code === "ER_DUP_ENTRY")
        return res.status(409).json({ error: "This email already exists." });
    }
  },
  async getEmails(req, res) {
    const userId = req.user.id;
    const dbEmails = await Email.findAll({
      where: { userId },
      attributes: ["email", "primaryEmail", "type"],
    });
    res.json(dbEmails);
  },
  async updateEmail(req, res) {
    const userId = req.user.id;
    const { email, oldEmail, primaryEmail, type } = req.body;

    try {
      if (primaryEmail) {
        const result = await Sequelize.transaction(async (t) => {
          await Email.update(
            { primaryEmail: false },
            { where: { userId, primaryEmail }, transaction: t }
          );
          const updatedEmail = await Email.update(
            { email, primaryEmail: true, type },
            { where: { email: oldEmail, userId },  transaction: t }
          );
          return updatedEmail;
        });

        return res.json(result);
      }

      const isDbEmailPrimary = await Email.findOne({
        where: { email: oldEmail, primaryEmail: true },
      });

      if (isDbEmailPrimary !== null) {
        return res
          .status(400)
          .json({ error: "You need to have at least one primary email" });
      }

      const updatedEmail = await Email.update(
        { email, type },
        { where: { email: oldEmail, userId } }
      );

      return res.json(updatedEmail);
    } catch (error) {
      if (error.original.code === "ER_DUP_ENTRY")
        return res.status(409).json({ error: "This email already exists." });
    }
  },

  async deleteEmail(req, res) {
    const userId = req.user.id;
    const { email } = req.body;

    const dbEmail = await Email.findOne({ where: {email, userId} });

    if (dbEmail === null) return res
        .status(400)
        .json({ error: "Email associated with this user was not found" });

    if (dbEmail.dataValues.primaryEmail)
      return res
        .status(400)
        .json({ error: "You can't delete a primary email" });

    const deleted = dbEmail.destroy();

    return res.json(deleted);
  },
};
