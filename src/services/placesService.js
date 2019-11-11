const placesRepository = require('../repository/placesRepository');

module.exports = {
    getPlaces: async () => {
         return await placesRepository.getPlaces();
    }
}