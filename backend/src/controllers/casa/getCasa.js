const {Casa} = require('../../db');
const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

const getCasas = async (req, res) => {
    try{
        const dbCasa = await readFile('src/json/dbCasa.json', 'utf-8');
        const dbCasaJson = JSON.parse(dbCasa);
        const dbCasas = dbCasaJson.casa;
        const existingCasas = await Casa.count();
        if (existingCasas === 0) {
            await Casa.bulkCreate(dbCasas);
        }
        const casas = await Casa.findAll();
        res.json(casas);
    }catch(error){
        console.error('Error al procesar la solicitud:', error); 
        res.status(500).json({ error: error.message });
    }
};

module.exports = {getCasas};