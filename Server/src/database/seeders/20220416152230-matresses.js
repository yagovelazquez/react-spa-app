module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("mattresses", [
      {
        mattressName: "Signature mattress (medium firmness)",
      },
      {
        mattressName: "Pillowtop mattress - Firm",
      },
      {
        mattressName: "Pillowtop mattress - Plush",

      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mattresses", null, {});
  },
};
