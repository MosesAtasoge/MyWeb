const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Imam = sequelize.define('Imam', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NamaImam: {
        type: Sequelize.STRING,
        allowNull: false
    },
    NomorHP: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Imam;