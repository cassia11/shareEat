const lugaresRepositorio = require('../repositorio/placesRepository');

module.exports = {
    obterLugares: async () => {
         return await lugaresRepositorio.obterLugares();
    }
}