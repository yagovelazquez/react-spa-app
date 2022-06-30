const { Subscription } = require("../models/Subscription");

module.exports = {
  async getSubscription(req, res) {
    const userId = req.user.id;

    const dbSubscription = await Subscription.findOne({
      where: { userId },
      attributes: { exclude: ["userId", "id"] },
    });

    res.json(dbSubscription);
  },
  async updateSubscription(req, res) {
    const userId = req.user.id;
    const { subSurveys, subResidences, subOffers } = req.body;

    const updatedSubscription = await Subscription.update(
      { subSurveys, subResidences, subOffers },
      { where: { userId } }
    );

    return res.json(updatedSubscription);
  },
};
