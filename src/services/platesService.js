const platesRepository = require('../repository/platesRepository');

module.exports = {
    obterPratos: async () => {
         return await platesRepository.obterPratos(req.params.id);
         
    }
}