const {Mago} = require('../../db');
const dbMago = require('../../json/dbMago.json');

const getMagos = async (req, res) => {
    try{
        await Mago.bulkCreate(dbMago);
        const magos = await Mago.findAll();
        res.json(magos);
    }catch(error){
        res.status(500).json({error: 'Error interno en el servidor'});
    }
};

module.exports = {getMagos};