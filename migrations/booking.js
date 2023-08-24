'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Allcodes', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },
    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },

   
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
      },
      timeType: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};