const express = require('express');
const router = express.Router();
const { getNasaApiData, getApiNasaData, getGbifNasaData } = require('../controllers/apiController.js');


router.post('/nasa', getNasaApiData);
router.get('/nasa', getApiNasaData);
router.get('/gbif', getGbifNasaData);


module.exports = router; 