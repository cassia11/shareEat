const platesRepository = require('../repository/platesRepository');

module.exports = {
    getPlates: async () => {
         return await platesRepository.getPlates(req.params.id);
         
    }
}