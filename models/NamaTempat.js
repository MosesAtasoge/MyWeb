const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const NamaTempat = sequelize.define('NamaTempat',{
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    NamaTempat: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    AlamatLengkap: {
        type: Sequelize.TEXT,
        allowNull: true,
    }
});

module.exports = NamaTempat;