const express = require('express');
const {getMagos} = require('../controllers/mago/getMago');
const {getMagosById} = require('../controllers/mago/getMagoById');
const {getMagosByName} = require('../controllers/mago/getMagoByName');
const routerMagos = express.Router();

routerMagos.get('/', getMagos);
routerMagos.get('/:id', getMagosById);
routerMagos.get('/name/:nombre', getMagosByName);

module.exports = routerMagos;


