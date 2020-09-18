import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [{
        username: 'Admin',
        email: 'admin@example.com',
        phone: '1234567890',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    )
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('users', null);
  }
};
