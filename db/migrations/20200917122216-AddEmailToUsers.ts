import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, Sequilize) => {
    await queryInterface.addColumn(
      'users',
      'email',
      {
        type: Sequilize.STRING,
        unique: true
      }
    )
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeColumn('users', 'email')
  }
};
