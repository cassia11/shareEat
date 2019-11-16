const placesService = require('../services/placesService')

module.exports = {
    getPlaces: async (req, resp) => {
        const places = await placesService.getPlaces();
        resp.status(200).send(places);
    },
    getPlaceId: async (req, resp) => {
        const places = await placesService.getPlaceId(req.params.id);
        resp.status(200).send(places);
    }
}
