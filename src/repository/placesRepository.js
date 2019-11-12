const db = require('./database');

module.exports = {
    getPlaces: () => {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM places", async (err, rows) => {
                if (err) {
                    throw reject(err);
                }

            // let allPlaces = []
                // let platesLength = 0
                // places.map(async (place) => {
                //     platesLength = await new Promise((resolve, reject) => {
                //         db.all(`SELECT * FROM plates WHERE places_id = ?`, [place.id], (error, plates) => {
                //             resolve(plates.length)
                //         })
                //     })

                //     allPlaces.push({ ...place, plates_count: platesLength })
                // })
                //return resolve(places);
                return resolve(rows);
            });
        });
    }
}