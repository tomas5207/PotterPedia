const {Casa} = require('../../db');
const dbCasa = require('../../json/dbCasa.json');

const getCasas = async (req, res) => {
    try{
        await Casa.bulkCreate(dbCasa);
        const casas = await Casa.findAll();
        res.json(casas);
    }catch(error){
        res.status(500).json({error: 'Error interno en el servidor'});
    }
};

module.exports = {getCasas};