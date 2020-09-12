'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            task: {
                allowNull: false,
                type: Sequelize.STRING
            },
            priority: {
                allowNull: false,
                type: Sequelize.STRING
            },
            registered_on: {
                allowNull: false,
                type: Sequelize.STRING
            },
            deadline: {
                allowNull: false,
                type: Sequelize.STRING
            },
            possible_solution: {
                allowNull: false,
                type: Sequelize.STRING
            },

            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Users',
                    key: "id"
                }
            },

            customerId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Customers',
                    key: "id"
                }
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
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Tasks');
    }
};