const express = require('express');
const router = express.Router();
const lugaresController = require('./../controller/lugaresController');
const platesController = require('./../controller/platesController')

router.get('/', (request, response, next) => {
    response.status(200).send({
        title: 'MentionsAPI',
        version: '1.0.0'
    });
});

router.get('/lugares', lugaresController.obterLugares);
router.get('/:id/pratos', (req, res)=>{
    res.send(platesController.obterPratos);


})
module.exports = router;