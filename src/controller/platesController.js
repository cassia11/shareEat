const platesService = require('./../services/platesService')

module.exports = {
    obterPratos: async (req, resp) => {
        const pratos = await platesService.obterPratos(req.params.id);
        resp.status(200).send(pratos);
    }
}
