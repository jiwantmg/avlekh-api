const { Sequelize } = require('sequelize')

module.exports = new Sequelize('avlekh', 'bhisaan', 'System@123321', {
    host: 'localhost',
    dialect: 'mysql'
});