const platesRepository = require('../repository/platesRepository');
const plate = require('./../dominio/plates')


module.exports = {
    getPlates: async (id) => {
         return await platesRepository.getPlates(id);
         
    }, 

    save:  async (plate) => {
        await platesRepository.save(plate);      
    }
}