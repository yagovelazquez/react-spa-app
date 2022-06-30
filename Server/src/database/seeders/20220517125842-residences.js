module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("residences", [
      {
        continent: "EUROPE",
        property: "ATHENS (ASTIR PALACE)",
      },
      {
        continent: "EUROPE",
        property: "MADRID",
      },
      {
        continent: "EUROPE",
        property: "MILAN",
      },
      {
        continent: "EUROPE",
        property: "MOSCOW",
      },
      {
        continent: "EUROPE",
        property: "PRAGUE",
      },
      {
        continent: "EUROPE",
        property: "FLORENCE",
      },
      {
        continent: "EUROPE",
        property: "BUDAPEST",
      },
      {
        continent: "EUROPE",
        property: "LISBON",
      },
      {
        property: 'ABU DHABI',
        continent: 'MIDDLE EAST & AFRICA',
      },
      {
        property: 'DOHA',
        continent: 'MIDDLE EAST & AFRICA',
      },
      {
        property: 'CASA BLANCA',
        continent: 'MIDDLE EAST & AFRICA',
      },
      {
        property: 'SERENGETI',
        continent: 'MIDDLE EAST & AFRICA',
      },
      {
        property: 'BEIJING',
        continent: 'ASIA & PACIFIC',
      } ,
      {
        property: 'BORA BORA',
        continent: 'ASIA & PACIFIC',
      } ,
      {
        property: 'CHIANG MAI',
        continent: 'ASIA & PACIFIC',
      } ,
      {
        property: 'LANGKAWI',
        continent: 'ASIA & PACIFIC',
      } ,
      {
        property: 'MACAO',
        continent: 'ASIA & PACIFIC',
      } ,
      {
        property: 'SINGAPORE',
        continent: 'ASIA & PACIFIC',
      } ,
      {
        property: 'SYDNEY',
        continent: 'ASIA & PACIFIC',
      } ,
      {
        property: 'BOGOTÁ (CASA MEDINA)',
        continent: 'CENTRAL & SOUTH AMERICA',
      } ,
      {
        property: 'COSTA RICA AT PENINSULA PAPAGAYO',
        continent: 'CENTRAL & SOUTH AMERICA',
      } ,
      {
        property: 'ANGUILLA',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'ATLANTA',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'CHICAGO',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'DALLAS',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'HAWAII, MAUI',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'HOUSTON',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'NEW YORK',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'SAN FRANCISCO',
        continent: 'NORTH AMERICA',
      } ,
      {
        property: 'TORONTO',
        continent: 'NORTH AMERICA',
      } ,

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("residences", null, {});
  },
};
