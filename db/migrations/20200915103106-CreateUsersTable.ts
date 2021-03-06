export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      username: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
      },

      phone: {
        type: Sequelize.STRING(13),
        allowNull: false,
        unique: true
      },

      firstName: {
        type: Sequelize.STRING(50),
        allowNull: true
      },

      lastName: {
        type: Sequelize.STRING(50),
        allowNull: true
      },

      password: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('users');
  }
};
