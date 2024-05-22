const express = require('express');
const routerCasas = express.Router();
const {getCasas} = require('../controllers/casa/getCasa');

routerCasas.get('/', getCasas);

module.exports = routerCasas;