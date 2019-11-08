const db = require('./database');
const plate = require('./../dominio/plates')
module.exports = {

    obterPratos: async (id) => {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM PLATES WHERE PLACES_ID = ?", [id], (err, rows) => {
                if (err) {
                    throw reject(err);
                }

                
                const plates = [];

                rows.forEach((item) => {
                    plate.id = item.id;
                    plate.name = item.name;
                    plate.value = item.value;
                    plate.description = item.description;
                    plate.places_id = item.places_id;
                    plates.push(plate);
                });

                return resolve(plates);
            });
        })
    }

}