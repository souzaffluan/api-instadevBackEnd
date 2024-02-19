'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,       
      },
      number_likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      author_id: {
        type: Sequelize.INTEGER,
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
   await queryInterface.dropTable('posts');
  },
};
