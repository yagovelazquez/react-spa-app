module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("interests", [
      {
        interest: "restaurants & bars",
        group: "food & drink"
      },
      {
        interest: "wine",
        group: "food & drink"
      },  {
        interest: "mixology",
        group: "food & drink"
      },  {
        interest: "brunch",
        group: "food & drink"
      },  {
        interest: "cooking classes",
        group: "food & drink"
      },  {
        interest: "farm to table",
        group: "food & drink"
      },  {
        interest: "local specialities",
        group: "food & drink"
      },{
        interest: "behind the scenes with chef",
        group: "food & drink"
      },{
        interest: "fitness",
        group: "health & wellness"
      },
      {
        interest: "spa",
        group: "health & wellness"
      },
      {
        interest: "yoga",
        group: "health & wellness"
      },
      {
        interest: "nature excursions",
        group: "health & wellness"
      },
      {
        interest: "skiing",
        group: "health & wellness"
      },
      {
        interest: "golfing",
        group: "health & wellness"
      },
      {
        interest: "diving",
        group: "health & wellness"
      },
      {
        interest: "surfing",
        group: "health & wellness"
      },
      {
        interest: "other water sports",
        group: "health & wellness"
      },
      {
        interest: "horseback riding",
        group: "health & wellness"
      },
      {
        interest: "spiritual discovery",
        group: "health & wellness"
      }, {
        interest: "meditation and mindfullness",
        group: "health & wellness"
      },{
        interest: "couples getaway",
        group: "travel & lifestyle"
      },
      {
        interest: "family getaway",
        group: "travel & lifestyle"
      },
      {
        interest: "friends getaway",
        group: "travel & lifestyle"
      },
      {
        interest: "solo travel",
        group: "travel & lifestyle"
      },
      {
        interest: "beach vacation",
        group: "travel & lifestyle"
      },
      {
        interest: "vacation rental",
        group: "travel & lifestyle"
      },
      {
        interest: "city escape",
        group: "travel & lifestyle"
      },
      {
        interest: "adventure travel",
        group: "travel & lifestyle"
      },
      {
        interest: "new hush sunrise hotels and resorts",
        group: "travel & lifestyle"
      },
      {
        interest: "private jet travel",
        group: "travel & lifestyle"
      }, {
        interest: "art and culture",
        group: "travel & lifestyle"
      }, {
        interest: "shopping",
        group: "travel & lifestyle"
      }, {
        interest: "sporting events",
        group: "travel & lifestyle"
      },
      {
        interest: "culinary travel",
        group: "travel & lifestyle"
      },
      
      
      


    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("interests", null, {});
  },
};
