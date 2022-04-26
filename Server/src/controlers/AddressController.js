const { Address } = require("../models/Address");
const Sequelize = require("../database/index");

module.exports = {
  async storeAddress(req, res) {
    const userId = req.user.id;
    const {
      country,
      state,
      city,
      street,
      number,
      postal,
      type,
      primaryAddress,
    } = req.body;

    if (primaryAddress) {
      const result = await Sequelize.transaction(async (t) => {
        await Address.update(
          { primaryAddress: false },
          { where: { userId }, transaction: t }
        );

        const newAddressDb = await Address.create(
          {
            country,
            state,
            city,
            street,
            number,
            postal,
            type,
            primaryAddress,
            userId,
          },
          { transaction: t }
        );

        const {
          id,
          userId: userNotUsed,
          updatedAt,
          createdAt,
          ...newAddress
        } = newAddressDb.dataValues;
        return newAddress;
      });

      return res.json(result);
    }

    const createdAddressDb = await Address.create({
      country,
      state,
      city,
      street,
      number,
      postal,
      type,
      primaryAddress,
      userId,
    });

    const {
      userId: userIdDb,
      id,
      updatedAt,
      createdAt,
      ...createdAddress
    } = createdAddressDb.dataValues;
    return res.json(createdAddress);
  },
  async getAddress(req, res) {
    const userId = req.user.id;
    const dbAddress = await Address.findAll({
      where: { userId },
    });

    res.json(dbAddress);
  },
  async updateAddress(req, res) {
    const userId = req.user.id;
    const {
      country,
      state,
      city,
      street,
      number,
      postal,
      type,
      primaryAddress,
      id,
    } = req.body;

    const dbAddress = await Address.findByPk(id, { where: { userId } });

    if (!dbAddress)
      return res.status(400).json({ error: "Could not found this address" });

    if (primaryAddress) {
      const result = await Sequelize.transaction(async (t) => {
        await Address.update(
          { primaryAddress: false },
          { where: { userId, primaryAddress }, transaction: t }
        );
        const updatedAddress = await Address.update(
          {
            country,
            state,
            city,
            street,
            number,
            postal,
            type,
            primaryAddress,
          },
          { where: { id, userId }, transaction: t }
        );
        return updatedAddress;
      });

      return res.json(result);
    }

    const updatedAddressDb = await Address.update({
        country,
        state,
        city,
        street,
        number,
        postal,
        type,
        primaryAddress,
      }, {where: {id, userId}});   

    return res.json(updatedAddressDb);
  },

  async deleteAddress(req, res) {
    const userId = req.user.id;
    const { id } = req.body;

    const dbAddress = await Address.findByPk(id, { where: { userId } });

    if (dbAddress === null)
      return res
        .status(400)
        .json({ error: "Address associated with this user was not found" });

    const deleted = dbAddress.destroy();

    return res.json(deleted);
  },
};
