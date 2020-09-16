import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, Sequilize) => {
    await queryInterface.addColumn(
      'posts',
      'userId',
      {
        type: Sequilize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    )
  },

  down: async (queryInterface: QueryInterface, Sequelize) => {
    await queryInterface.removeColumn('posts', 'userId')
  }
};
