const express = require('express');
const router = express.Router();
const lugaresController = require('./../controller/lugaresController');

router.get('/', (request, response, next) => {
    response.status(200).send({
        title: 'MentionsAPI',
        version: '1.0.0'
    });
});

router.get('/lugares', lugaresController.obterLugares);

module.exports = router;