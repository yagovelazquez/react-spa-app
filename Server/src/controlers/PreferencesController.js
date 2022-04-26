const { Preference } = require("../models/Preference");
const { Pillow } = require("../models/Pillow");
const { Mattress } = require("../models/Mattress");
const connection = require("../database/index");
const { QueryTypes } = require("sequelize");

module.exports = {
  async updateSleepPref(req, res) {
    const { mattressName, pillowName } = req.body;

    const [results, metadata] = await connection.query(
      `UPDATE user_preferences INNER JOIN pillows ON "${pillowName}" = pillowName 
    INNER JOIN mattresses ON "${mattressName}" = mattressName 
    SET user_preferences.pillowId = pillows.id, user_preferences.mattressId = mattresses.id
    WHERE user_preferences.userId = ${req.user.id} ;`,
      { type: QueryTypes.UPDATE }
    );



    res.json(metadata);
  },

  async updateRoomPref(req, res) {
    const { smokingRoom } = req.body;

    if (!Preference.getAttributes().smokingRoom.values.includes(smokingRoom))
      return res.status(400).json({ error: "Invalid option" });

    const [result] = await Preference.update(
      { smokingRoom: "Non smoking room" },
      {
        where: {
          userId: req.user.id,
        },
      }
    );

    res.json(result);
  },

  async getUserPreferences(req, res) {
    const userPreferences = await Preference.findOne({
      where: { userId: req.user.id },
      attributes: ["smokingRoom"],
      include: [
        { association: "pillow", attributes: ["pillowName"] },
        { association: "mattress", attributes: ["mattressName"] },
      ],
    });

    const preferences = {
      roomPreferences: [userPreferences.smokingRoom],
      sleepPreferences: [
        userPreferences.pillow.get().pillowName,
        userPreferences.mattress.mattressName,
      ],
    };



    res.json(preferences);
  },
};
