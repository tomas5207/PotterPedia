const {Mago, Casa} = require('../../db');
const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

const getMagosById = async (req, res) => {
    const { id } = req.params;
    try{
        const dbMago = await readFile('src/json/dbMago.json', 'utf-8');
        const dbMagoJson = JSON.parse(dbMago);
        const dbMagos = dbMagoJson.mago;
        for (const mago of dbMagos) {
            if (mago.CasaId) {
                const casa = await Casa.findByPk(mago.CasaId);
                if (!casa) {
                    return res.status(400).json({ error: `La casa con ID ${mago.CasaId} no existe.` });
                }
            }
        }
        const existingMagos = await Mago.count();
        if (existingMagos === 0) {
            await Mago.bulkCreate(dbMagos);
        }
        const magos = await Mago.findByPk(id,{include: Casa});
        res.json(magos);
    }catch(error){
        console.error('Error al procesar la solicitud:', error); 
        res.status(500).json({ error: error.message });
    }
};

module.exports = {getMagosById};