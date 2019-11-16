const db = require('./database');

module.exports = {
    getPlaces: () => {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM places", async (err, rows) => {
                if (err) {
                    throw reject(err);
                }
                return resolve(rows);
            });
        });
    },
    getPlaceId: (id) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM places WHERE id = ?`, [id], (err, rows) => {
                if (err) {
                    throw reject(err);
                }
                return resolve(rows);
            });
        });
    }
}