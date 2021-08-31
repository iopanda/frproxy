const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('frproxy', 'admin', 'password', {
    dialect: 'mariadb',
    host: 'localhost'
})

module.exports = {
    sequelize: sequelize
}