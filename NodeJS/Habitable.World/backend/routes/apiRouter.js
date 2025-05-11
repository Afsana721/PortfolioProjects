const express = require('express');
const router = express.Router();
const { getNasaApiData, getApiNasaData, getGbifData } = require('../controllers/apiController.js');


router.post('/nasa', getNasaApiData);
router.get('/nasa', getApiNasaData);
router.get('/gbif', getGbifData);


module.exports = router; 