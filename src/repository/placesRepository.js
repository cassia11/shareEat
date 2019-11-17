const db = require('./database');

module.exports = {
    getPlaces: () => {
        return new Promise((resolve, reject) => {
            db.all("SELECT C.ID, C.NAME, COUNT(`PLACES_ID`) AS plates_qtd \
                    FROM PLACES AS C  \
                    LEFT JOIN PLATES AS P \
                    ON C.ID = P.PLACES_ID \
                    GROUP BY C.ID;", async (err, rows) => {
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