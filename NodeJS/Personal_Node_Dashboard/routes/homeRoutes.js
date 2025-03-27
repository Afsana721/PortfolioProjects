//Need express to create http call 
const express = require('express');
const router = express.Router();
const { getHomePage } = require('../controllers/homeController.js');



// create a get route and pass getHomePage function. 
router.get('/', getHomePage);


module.exports = router; 