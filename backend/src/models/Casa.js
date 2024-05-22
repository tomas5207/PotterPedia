const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Casa', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};