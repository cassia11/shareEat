const platesService = require('./../services/platesService')
const plate = require('./../dominio/plates')


module.exports = {
    getPlates: async (req, resp) => {
        const plates = await platesService.getPlates(req.params.id);
        resp.status(200).send(plates);
    }, 

    save: async (req, res) => {
    try {
      await platesService.save(plate);
      res.status(200).send({message: 'Prato cadastrado com sucesso!'});
    } catch (e) {
      res.status(500).send({message: 'Falha ao cadastrar um novo prato.'});
    }
}
}
