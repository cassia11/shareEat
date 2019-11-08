const db = require('./database');
var lugar = require('../dominio/places');

// public class LugaresRepositorio() {

//}
module.exports = {
    obterLugares: async () => {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM places", (err, rows) => {
                if (err) {
                    throw reject(err);
                }

                const lugares = [];

                rows.forEach((item) => {
                    lugar.id = item.id;
                    lugar.name = item.name;
                    lugares.push(lugar);
                });

                return resolve(lugares);
            });
        });
    }
}