const express = require('express');
const {getMagos} = require('../controllers/mago/getMago');
const routerMagos = express.Router();

routerMagos.get('/', getMagos);

module.exports = routerMagos;


