const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('mago', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        bio:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
};

