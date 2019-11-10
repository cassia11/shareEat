const db = require('./database');
// var lugar = require('../dominio/places');

// public class LugaresRepositorio() {

//}
module.exports = {
    getPlaces: async () => {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM places", (err, rows) => {
                if (err) {
                    throw reject(err);
                }

                // const lugares = [];

                // rows.forEach((item) => {
                //     lugar.id = item.id;
                //     lugar.name = item.name;
                //     lugares.push(lugar);
                // });
                    // console.log(lugares)
                 //   console.log(rows);
                return resolve(rows);
            });
        });
    }
}