require('dotenv').config();
const {Sequelize} = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT ,DB_NAME} = process.env;
const Casa_Model = require('./models/Casa');
const Mago_Model = require('./models/Mago');
const Hechizo_Model = require('./models/Hechizo');

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false, native: false 
});


Casa_Model(database);
Mago_Model(database);
Hechizo_Model(database);

const {Casa, Mago, Hechizo} = database.models;

Casa.hasMany(Mago);
Mago.belongsTo(Casa);


Mago.belongsToMany(Hechizo, {
    through: 'hechizo_mago',
    foreignKey: 'mago_id',
    otherKey: 'hechizo_id'
});

Hechizo.belongsToMany(Mago, {
    through: 'hechizo_mago',
    foreignKey: 'hechizo_id',
    otherKey: 'mago_id'
});

module.exports = {
    database,
    ...database.models,
};

