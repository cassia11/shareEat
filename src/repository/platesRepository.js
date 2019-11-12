const db = require('./database');
const plate = require('./../dominio/plates')
module.exports = {

    getPlates: (places_id) => {
        return new Promise((resolve, reject) => {

            db.all(`SELECT * FROM plates WHERE places_id = ?`, [places_id], (err, rows) => {
                if (err) {
                    throw reject(err);
                }
                return resolve(rows);
            });
        })
    },
    save: (plate) => {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO plates (name,value,description,places_id) VALUES (?,?,?,?)',
                [plate.name, plate.value, plate.description, plate.places_id], (err, rows) => {
                    if (err) {
                        throw reject(err);
                    }
                    
                    return resolve({ status: true, message: 'ok' })
            })
        })
    }
}

