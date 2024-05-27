const express = require('express');
const {getHechizos} = require('../controllers/hechizo/getHechizo');
const {getHechizosByName} = require('../controllers/hechizo/getHechizoByName');
const {getHechizosById} = require('../controllers/hechizo/getHechizoById');
const routerHechizos = express.Router();

routerHechizos.get('/', getHechizos);
routerHechizos.get('/name/:nombre', getHechizosByName);
routerHechizos.get('/:id', getHechizosById);

module.exports = routerHechizos;


