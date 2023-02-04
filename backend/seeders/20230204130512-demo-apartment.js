'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Apartments', [
      {
        name: 'Sun Hotel',
        price: 220,
        rooms: 2,
        description: 'Perfect Sun Hotel for you',
      },
      {
        name: 'Market square apartments',
        price: 220,
        rooms: 1,
        description: 'Big square apartments just for you',
      },
      {
        name: 'Cozy Room',
        price: 20,
        rooms: 1,
        description: 'Small cozy room',
      },
      {
        name: 'Amazing room near tower bridge',
        price: 1650,
        rooms: 3,
        description: 'This Room is located opposite Shadwell DLR station.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Apartments', null, {});
  },
};
