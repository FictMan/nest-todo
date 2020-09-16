export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      title: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
      },

      content: {
        type: Sequelize.STRING(13),
        allowNull: false,
        unique: true
      },

      status: {
        type: Sequelize.ENUM,
        values: ['active', 'complete'],
        defaultValue: 'active'
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('posts');
  }
};
