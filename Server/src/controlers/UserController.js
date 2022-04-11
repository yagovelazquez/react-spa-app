const User = require("../models/User");
const Email = require("../models/Email")

module.exports = {
  async store(req, res) {
    const { name, lastName, password, email } = req.body;

    const user = await User.create({ name, lastName, password });
    const dbemail = await Email.create({email, userId: user.id} )


    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
};
