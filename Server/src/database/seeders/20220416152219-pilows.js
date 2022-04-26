module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("pillows", [
      {
        pillowName: "Feather",
      },
      {
        pillowName: "Buckwheat",
      },
      {
        pillowName: "Down Alternative",
      },
      {
        pillowName: "Extra Large",
      },
      {
        pillowName: "Foam",
      },
      {
        pillowName: "Hard",
      },
      {
        pillowName: "Horsehair",
      },
      {
        pillowName: "Memory Foam",
      },
      {
        pillowName: "Orthopedic",
      },
      {
        pillowName: "Soft",
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pillows", null, {});
  },
};
