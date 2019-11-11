const platesRepository = require('../repository/platesRepository');
const plate = require('./../dominio/plates')


module.exports = {
    getPlates: async () => {
         return await platesRepository.getPlates(req.params.id);
         
    }, 

    save:  async () => {
        await platesRepository.save(plate);      
    }
}