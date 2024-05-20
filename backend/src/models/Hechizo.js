const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('hechizo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripción: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        movimiento:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
