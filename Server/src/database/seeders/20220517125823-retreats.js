module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("retreats", [
      {
        continent: "EUROPE",
        property: "FRENCH RIVIERA SAINT-JEAN-CAP-FERRAT",
        status: "Open",
        dinningOptions: 5,
        spa: true,
        pool: false,
      },
      {
        continent: "EUROPE",
        property: "LES CHALETS DU MONT D'ARBOIS MEGÈVE",
        status: "Open",
        dinningOptions: 2,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "LONDON AT TEN TRINITY SQUARE",
        status: "Open",
        dinningOptions: 3,
        spa: true,
        pool: true,
      },
      {
        property: 'MAURITUS AT ANAHITA',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 0,
        spa: true,
        pool: false
      },
      {
        property: 'SEYCHELLES',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 0,
        spa: true,
        pool: false
      },
      {
        property: 'SEYCHELLES AT DESROUCHES ISLAND',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 9,
        spa: true,
        pool: false
      },
      {
        property: 'SHARM EL SHEIKH EGYPT',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Open',
        dinningOptions: 0,
        spa: true,
        pool: false
      },
      {
        property: 'BALI AT JIMBARAN BAY',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 7,
        spa: true,
        pool: false
      } ,
      {
        property: 'BORA BORA',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 3,
        spa: true,
        pool: false
      } ,
      {
        property: 'CHIANG MAI',
        continent: 'ASIA & PACIFIC',
        status: 'New Upcoming Opening',
        openingDate: "July 11, 2022",
        dinningOptions: 9,
        spa: true,
        pool: true
      } ,
      {
        property: 'HANGZHOU AT WEST LAKE',
        continent: 'ASIA & PACIFIC',
        status: 'Closed',
        dinningOptions: 9,
        spa: false,
        pool: false
      } ,
      {
        property: 'KOH SAMUI THAILAND',
        continent: 'ASIA & PACIFIC',
        status: 'Closed',
        dinningOptions: 7,
        spa: false,
        pool: false
      } ,
      {
        property: 'KUALA LAMPUR',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 9,
        spa: true,
        pool: false
      } ,
      {
        property: 'KYOTO',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 1,
        spa: true,
        pool: false
      } ,
      {
        property: 'MALDIVES PRIVATE ISLAND AT VOAVAH',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 1,
        spa: true,
        pool: true
      } ,
      {
        property: 'THE NAM HAI, HOI AN, VIETNAM',
        continent: 'ASIA & PACIFIC',
        status: 'New Upcoming Opening',
        openingDate: "August 21, 2022",
        dinningOptions: 4,
        spa: false,
        pool: false
      } ,

      {
        property: 'COSTA RICA AT PENINSULA PAPAGAYO',
        continent: 'CENTRAL & SOUTH AMERICA',
        status: 'Closed',
        dinningOptions: 7,
        spa: true,
        pool: true
      } ,
      {
        property: 'ANGUILLA',
        continent: 'NORTH AMERICA',
        status: 'New Upcoming Opening',
        openingDate: "December 01, 2022",
        dinningOptions: 1,
        spa: false,
        pool: false
      } ,
      {
        property: 'HOUSTON',
        continent: 'NORTH AMERICA',
        status: 'Closed',
        dinningOptions: 4,
        spa: false,
        pool: true
      } ,
      {
        property: 'JACKSON HOLE',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 5,
        spa: true,
        pool: false
      } ,
      {
        property: 'LOS CABOS AT COSTA PALMAS',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 4,
        spa: false,
        pool: true
      } ,
      {
        property: 'NAPA VALLEY',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 8,
        spa: false,
        pool: true
      } ,
      {
        property: 'NEVIS WEST INDIES',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 5,
        spa: true,
        pool: true
      } ,
      {
        property: 'PUNTA MITA MÉXICO',
        continent: 'NORTH AMERICA',
        dinningOptions: 1,
        status: 'New Upcoming Opening',
        openingDate: "July 01, 2022",
        spa: false,
        pool: false
      } ,
      {
        property: 'SAN DIEGO AVIARA',
        continent: 'NORTH AMERICA',
        status: 'Closed',
        dinningOptions: 9,
        spa: false,
        pool: true
      } ,
      {
        property: 'VAIL',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 9,
        spa: true,
        pool: true
      } ,
      {
        property: 'WHISTLER',
        continent: 'NORTH AMERICA',
        status: 'New Upcoming Opening',
        openingDate: "June 01, 2022",
        dinningOptions: 3,
        spa: true,
        pool: true
      } ,

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("retreats", null, {});
  },
};
