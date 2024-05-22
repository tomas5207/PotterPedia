const express = require('express');
const {getHechizos} = require('../controllers/hechizo/getHechizo');
const routerHechizos = express.Router();

routerHechizos.get('/', getHechizos);

module.exports = routerHechizos;


