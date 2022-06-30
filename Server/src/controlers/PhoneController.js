const { Phone } = require("../models/Phone");
const Sequelize = require("../database/index");

module.exports = {
  async storePhone(req, res) {
    const userId = req.user.id;
    const { phone, primaryPhone, type, countryCode } = req.body;
    try {
      if (primaryPhone) {
        const result = await Sequelize.transaction(async (t) => {
          await Phone.update(
            { primaryPhone: false },
            { where: { userId }, transaction: t }
          );

          const newPhoneDb = await Phone.create(
            { phone, primaryPhone, userId, type, countryCode },
            { transaction: t }
          );

          const {
            id,
            userId: userNotUsed,
            updatedAt,
            createdAt,
            ...newPhone
          } = newPhoneDb.dataValues;
          return newPhone;
        });

        return res.json(result);
      }

      const createdPhoneDb = await Phone.create({
        phone,
        primaryPhone,
        type,
        userId,
        countryCode
      });

      const {
        userId: userIdDb,
        id,
        updatedAt,
        createdAt,
        ...createdPhone
      } = createdPhoneDb.dataValues;
      return res.json(createdPhone);
    } catch (error) {
      if (error.original.code === "ER_DUP_ENTRY")
        return res.status(409).json({ error: "This phone already exists." });
        throw new Error(error)
    }
  },
  async getPhone(req, res) {
    const userId = req.user.id;
    const dbPhones = await Phone.findAll({
      where: { userId },
      attributes: ["phone", "primaryPhone", "type", "countryCode"],
    });

    res.json(dbPhones);
  },
  async updatePhone(req, res) {
    const userId = req.user.id;
    const { phone, oldPhone, primaryPhone, type, countryCode } = req.body;

    const dbPhone = await Phone.findOne({
        where: { phone: oldPhone, userId },
      });

     if (!dbPhone) return res.status(400).json({error: "Could not found this phone"}) 

    try {
      if (primaryPhone) {
         
        const result = await Sequelize.transaction(async (t) => {
          await Phone.update(
            { primaryPhone: false },
            { where: { userId, primaryPhone }, transaction: t }
          );
          const updatedPhone = await Phone.update(
            { phone, type, countryCode, primaryPhone: true },
            { where: { phone: oldPhone, userId }, transaction: t }
          );
          return updatedPhone;
        });

        return res.json(result);
      }


      const updatedPhone = await Phone.update(
        { phone, type, countryCode },
       { where: {phone: oldPhone, userId}}
      );

      return res.json(updatedPhone);
    } catch (error) {
      console.log(error)
      if (error.original.code === "ER_DUP_ENTRY")
        return res.status(409).json({ error: "This phone already exists." });
    }
  },

  async deletePhone(req, res) {
    const userId = req.user.id;
    const { phone } = req.body;

    const dbPhone = await Phone.findOne({where:  {phone, userId} });

    if (dbPhone === null)
      return res
        .status(400)
        .json({ error: "Phone associated with this user was not found" });

    const deleted = dbPhone.destroy();

    return res.json(deleted);
  },
};
