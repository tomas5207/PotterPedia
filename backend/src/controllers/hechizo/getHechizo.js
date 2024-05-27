const {Hechizo} = require('../../db');
const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

const getHechizos = async (req, res) => {
    try{
        const dbHechizo = await readFile('src/json/dbHechizo.json', 'utf-8');
        const dbHechizoJson = JSON.parse(dbHechizo);
        const dbHechizos = dbHechizoJson.hechizo;
        const existingHechizos = await Hechizo.count();
        if (existingHechizos === 0) {
            await Hechizo.bulkCreate(dbHechizos);
        }
        const hechizos = await Hechizo.findAll();
        res.json(hechizos);
    }catch(error){
        console.error('Error al procesar la solicitud:', error); 
        res.status(500).json({ error: error.message });
    }
};

module.exports = {getHechizos};