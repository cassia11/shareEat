const db = require('./database');
// const plate = require('./../dominio/plates')
module.exports = {

    obterPratos: async (places_id) => {
        return new Promise((resolve, reject) => {
            db.queryById("SELECT * FROM PLATES WHERE PLACES_ID = ?", [places_id], (err, rows) => {
                if (err) {
                    throw reject(err);
                }

                
                // const plates = [];

                // rows.forEach((item) => {
                //     plate.id = item.id;
                //     plate.name = item.name;
                //     plate.value = item.value;
                //     plate.description = item.description;
                //     plate.places_id = item.places_id;
                //     plates.push(plate);
                // });
                console.log(rows)
                return resolve(rows);
            });
        })
    }

}