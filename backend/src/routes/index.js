const {Router} = require('express');
const router = Router();
const routerCasas = require('./Casa');
const routerHechizos = require('./Hechizo');
const routerMagos = require('./Mago');

router.use('/casa', routerCasas);
router.use('/hechizo', routerHechizos);
router.use('/mago', routerMagos);

module.exports = router;