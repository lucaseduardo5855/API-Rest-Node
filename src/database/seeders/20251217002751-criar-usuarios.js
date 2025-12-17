const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => { return queryInterface.bulkInsert(
      'users', [
        {
        nome: 'Lucas 0',
        email: 'lucas0@gmail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
       {
        nome: 'Lucas 1',
        email: 'lucas1@gmail.com',
        password_hash: await bcrypt.hash('caps1lock', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
       {
        nome: 'Lucas 2',
        email: 'lucas2@gmail.com',
        password_hash: await bcrypt.hash('caps1lock@', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ],
      {}
    );
  },

  down() {

  }
};
