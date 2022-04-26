const { Language } = require("../models/Language");
const Sequelize = require("../database/index");

module.exports = {
  async storeLanguage(req, res) {
    const userId = req.user.id;
    const { preferredLanguage, country } = req.body;

    const languageDb = Language.findOne({ where: { userId } });
    if (languageDb)
      return res
        .status(400)
        .json({ error: "You already have an added language" });

    const createdLanguageDb = await Language.create({
      preferredLanguage,
      country,
      userId,
    });

    const {
      userId: userIdDb,
      id,
      updatedAt,
      createdAt,
      ...createdLanguage
    } = createdLanguageDb.dataValues;
    return res.json(createdLanguage);
  },
  async getLanguage(req, res) {
    const userId = req.user.id;
    const dbLanguage = await Language.findOne({
      where: { userId },
      attributes: ["preferredLanguage", "country"],
    });

    res.json(dbLanguage);
  },
  async updateLanguage(req, res) {
    const userId = req.user.id;
    const { preferredLanguage, country } = req.body;

   
      const updatedLanguage = await Language.update(
        { preferredLanguage, country },
        { where: { userId } }
      );

      return res.json(updatedLanguage);
  },

};
