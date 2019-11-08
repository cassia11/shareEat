const platesRepository = require('../repositorio/platesRepository');

module.exports = {
    obterPratos: async () => {
         return await platesRepository.obterPratos(req.params.id);
         
    }
}