import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          title: 'first task',
          content: 'some text',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'second task',
          content: 'some text',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        ]
    )
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('posts', null);
  }
};
