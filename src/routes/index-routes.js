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

var base = '/api/v1/'
/**
  * This function comment is parsed by doctrine
  * @route GET /lugares
  * @group places - Operations about places
  * @returns {object} 200 - An array of places info
  * @returns {Error}  default - Unexpected error
  */
router.get(base + 'lugares', placesController.getPlaces);
/**
  * This function comment is parsed by doctrine
  * @route GET /lugares/{id}
  * @group places - Operations about places
  * @param {integer} id.path.required - id - example: 1
  * @returns {object} 200 - An array of plates info
  * @returns {Error}  default - Unexpected error
  */
router.get(base + 'lugares/:id', placesController.getPlaceId);
/**
  * This function comment is parsed by doctrine
  * @route GET /{id}/pratos
  * @group plates - Operations about plates
  * @param {integer} id.path.required - id - example: 1
  * @returns {object} 200 - An array of plates info
  * @returns {Error}  default - Unexpected error
  */
router.get(base + ':id/pratos', platesController.getPlates);
/**
  * This function comment is parsed by doctrine
  * @route POST /cadastrar
  * @group plates - Operations about plates
  * @param {object} plate.body.required - plate - a model plate:
  * {
  *     "name": "xis",
  *     "value": 4,
  *     "description": "xis",
  *     "places_id": 1
  * }
  * @returns {object} 201 - A message of success
  * @returns {Error}  500 - Unexpected error
  * @returns {Error}  default - Unexpected error
  */
router.post(base + 'cadastrar', platesController.save);
module.exports = router;