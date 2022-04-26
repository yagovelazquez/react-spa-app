const { Interest } = require("../models/Interest");
const { User } = require("../models/User");
const Users_Interests = require("../models/Users_Interests");

module.exports = {
  async storeUserInterests(req, res) {
    const { interest } = req.body;


    const userId = req.user.id;

    const userInterests = await Users_Interests.findAll({
      where: { userId: userId },
      include: [{ association: "interests" }],
    });


    let includedInterest;
    const interestsArray = [];
    userInterests.forEach((userInterests) => {
      const { id, ...userInterest } = userInterests.interests.dataValues;

      if (userInterest.interest === interest) {
        includedInterest = userInterest.interest;
        Users_Interests.destroy({ where: { id: userInterests.id } });
        return;
      }
      interestsArray.push(userInterest);
    });

    if (!includedInterest) {
      const { dataValues: interestDb } = await Interest.findOne({
        where: { interest },
      });
      if (!interestDb)
        return res.status(400).json({ error: "Interest doesn't exists" });

      await Users_Interests.create({
        userId,
        interestId: interestDb.id,
      });



      const { id, ...interestNoId } = interestDb;

      interestsArray.push(interestNoId);
    }

    res.json(interestsArray);
  },

  async getUserInterests(req, res) {
    const userId = req.user.id;

    const result = await User.findByPk(userId, {
      attributes: [],
      include: [
        {
          association: "interests",
          attributes: ["interest", "group"],
          through: { attributes: [] },
        },
      ],
    });



    res.json(result.interests);
  },
};
