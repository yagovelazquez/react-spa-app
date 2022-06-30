module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("hotel_resorts", [
      {
        continent: "EUROPE",
        property: "ATHENS (ASTIR PALACE)",
        status: "Open",
        dinningOptions: 5,
        spa: true,
        pool: false,
      },
      {
        continent: "EUROPE",
        property: "MADRID",
        status: "Open",
        dinningOptions: 2,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "LONDON AT PARK LANE",
        status: "Open",
        dinningOptions: 3,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "MILAN",
        status: "Open",
        dinningOptions: 1,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "MOSCOW",
        status: "Open",
        dinningOptions: 6,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "PRAGUE",
        status: "Open",
        dinningOptions: 6,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "FLORENCE",
        status: "Open",
        dinningOptions: 1,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "GENEVA",
        status: "Open",
        dinningOptions: 2,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "BUDAPEST",
        status: "Open",
        dinningOptions: 6,
        spa: true,
        pool: true,
      },
      {
        continent: "EUROPE",
        property: "LISBON",
        status: "Open",
        dinningOptions: 6,
        spa: true,
        pool: true,
      },
      {
        property: 'ABU DHABI',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 0,
        spa: true,
        pool: false
      },
      {
        property: 'ALEXANDRIA',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 0,
        spa: true,
        pool: false
      },
      {
        property: 'AMMAN',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 9,
        spa: true,
        pool: false
      },
      {
        property: 'DOHA',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Open',
        dinningOptions: 0,
        spa: true,
        pool: false
      },
      {
        property: 'CASA BLANCA',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Open',
        dinningOptions: 2,
        spa: false,
        pool: true
      },
      {
        property: 'SERENGETI',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 4,
        spa: true,
        pool: false
      },
      {
        property: 'MAURITIUS',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Closed',
        dinningOptions: 4,
        spa: false,
        pool: true
      },
      {
        property: 'TUNIS',
        continent: 'MIDDLE EAST & AFRICA',
        status: 'Open',
        dinningOptions: 2,
        spa: false,
        pool: true
      },
      {
        property: 'BEIJING',
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
        property: 'GUANGZHOU',
        continent: 'ASIA & PACIFIC',
        status: 'Closed',
        dinningOptions: 9,
        spa: false,
        pool: false
      } ,
      {
        property: 'HONG KONG',
        continent: 'ASIA & PACIFIC',
        status: 'Closed',
        dinningOptions: 7,
        spa: false,
        pool: false
      } ,
      {
        property: 'KYOTO',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 9,
        spa: true,
        pool: false
      } ,
      {
        property: 'LANGKAWI',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 1,
        spa: true,
        pool: false
      } ,
      {
        property: 'MACAO',
        continent: 'ASIA & PACIFIC',
        status: 'Open',
        dinningOptions: 1,
        spa: true,
        pool: true
      } ,
      {
        property: 'SINGAPORE',
        continent: 'ASIA & PACIFIC',
        status: 'New Upcoming Opening',
        openingDate: "August 21, 2022",
        dinningOptions: 4,
        spa: false,
        pool: false
      } ,
      {
        property: 'SYDNEY',
        continent: 'ASIA & PACIFIC',
        status: 'Closed',
        dinningOptions: 8,
        spa: false,
        pool: true
      } ,

      {
        property: 'BOGOTÁ',
        continent: 'CENTRAL & SOUTH AMERICA',
        status: 'Closed',
        dinningOptions: 7,
        spa: true,
        pool: true
      } ,
      {
        property: 'BUENOS AIRES',
        continent: 'CENTRAL & SOUTH AMERICA',
        status: 'Closed',
        dinningOptions: 4,
        spa: true,
        pool: false
      } ,
      {
        property: 'BOGOTÁ (CASA MEDINA)',
        continent: 'CENTRAL & SOUTH AMERICA',
        status: 'Open',
        dinningOptions: 5,
        spa: true,
        pool: true
      } ,
      {
        property: 'COSTA RICA AT PENINSULA PAPAGAYO',
        continent: 'CENTRAL & SOUTH AMERICA',
        status: 'Closed',
        dinningOptions: 6,
        spa: false,
        pool: false
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
        property: 'ATLANTA',
        continent: 'NORTH AMERICA',
        status: 'Closed',
        dinningOptions: 4,
        spa: false,
        pool: true
      } ,
      {
        property: 'CHICAGO',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 5,
        spa: true,
        pool: false
      } ,
      {
        property: 'DALLAS',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 4,
        spa: false,
        pool: true
      } ,
      {
        property: 'DENVER',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 8,
        spa: false,
        pool: true
      } ,
      {
        property: 'HAWAII, HUALALAI',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 5,
        spa: true,
        pool: true
      } ,
      {
        property: 'HAWAII, MAUI',
        continent: 'NORTH AMERICA',
        dinningOptions: 1,
        status: 'New Upcoming Opening',
        openingDate: "July 01, 2022",
        spa: false,
        pool: false
      } ,
      {
        property: 'HOUSTON',
        continent: 'NORTH AMERICA',
        status: 'Closed',
        dinningOptions: 9,
        spa: false,
        pool: true
      } ,
      {
        property: 'LOS ANGELES',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 9,
        spa: true,
        pool: true
      } ,
      {
        property: 'ORLANDO',
        continent: 'NORTH AMERICA',
        status: 'New Upcoming Opening',
        openingDate: "June 01, 2022",
        dinningOptions: 3,
        spa: true,
        pool: true
      } ,
      {
        property: 'NEW YORK',
        continent: 'NORTH AMERICA',
        status: 'Closed',
        dinningOptions: 8,
        spa: true,
        pool: false
      } ,
      {
        property: 'SAN FRANCISCO',
        continent: 'NORTH AMERICA',
        status: 'Closed',
        dinningOptions: 8,
        spa: true,
        pool: false
      } ,
      {
        property: 'TORONTO',
        continent: 'NORTH AMERICA',
        status: 'Open',
        dinningOptions: 6,
        spa: true,
        pool: true
      } ,

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("hotel_resorts", null, {});
  },
};
