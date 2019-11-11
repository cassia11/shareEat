const platesService = require('./../services/platesService')

module.exports = {
    getPlates: async (req, resp) => {
        const plates = await platesService.getPlates(req.params.id);
        resp.status(200).send(plates);
    }
}
