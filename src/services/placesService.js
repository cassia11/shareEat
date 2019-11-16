const placesRepository = require('../repository/placesRepository');

module.exports = {
    getPlaces: async () => {
         return await placesRepository.getPlaces();
    },
    getPlaceId: async (id) => {
        return await placesRepository.getPlaceId(id);
    }
}