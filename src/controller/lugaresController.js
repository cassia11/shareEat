const lugaresService = require('./../services/lugaresService')

module.exports = {
    obterLugares: async (req, resp) => {
        const lugares = await lugaresService.obterLugares();
        resp.status(200).send(lugares);
    }
}
