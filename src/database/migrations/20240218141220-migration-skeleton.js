'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdat: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedat: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
