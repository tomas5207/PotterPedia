const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Hechizo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        movimiento:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
