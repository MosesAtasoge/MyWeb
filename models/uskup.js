const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Uskup = sequelize.define('Uskup', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NamaUskup: {
        type: Sequelize.STRING,
        allowNull: false
    },
    NomorHP: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Alamat: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Uskup;