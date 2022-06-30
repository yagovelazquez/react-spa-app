const { HotelResort } = require("../models/HotelResort");
const {Residence} = require("../models/Residence")
const {Retreat} = require("../models/Retreat")

module.exports = {
  async getHotelResorts(req, res) {
    const dbHotelResorts = await HotelResort.findAll({
      attributes: { exclude: ["id"] },
    });

    res.json(dbHotelResorts);
  },
  async getRetreats(req, res) {
    const dbRetreats = await Retreat.findAll({
      attributes: { exclude: ["id"] },
    });

    res.json(dbRetreats);
  },
  async getResidences(req, res) {
    const dbResidences = await Residence.findAll({
      attributes: { exclude: ["id"] },
    });

    res.json(dbResidences);
  },
};
