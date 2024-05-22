const {Hechizo} = require('../../db');
const dbHechizo = require('../../json/dbHechizo.json');

const getHechizos = async (req, res) => {
    try{
        await Hechizo.bulkCreate(dbHechizo);
        const hechizos = await Hechizo.findAll();
        res.json(hechizos);
    }catch(error){
        res.status(500).json({error: 'Error interno en el servidor'});
    }
};

module.exports = {getHechizos};