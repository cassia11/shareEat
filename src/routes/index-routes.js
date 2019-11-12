const express = require('express');
const router = express.Router();
const placesController = require('./../controller/placesController');
const platesController = require('./../controller/platesController')

router.get('/', (request, response, next) => {
    response.status(200).send({
        title: 'MentionsAPI',
        version: '1.0.0'
    });
});

router.get('/lugares', placesController.getPlaces);
router.get('/:id/pratos', platesController.getPlates);
router.post('/pratos', platesController.save);
module.exports = router;