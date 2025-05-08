const express = require("express");
const router = express.Router();

const { getRegisterUserData, getLoginUserData } = 
require('../controllers/authController.js');


//Use router
router.post('/Register',getRegisterUserData );
router.post('/LoginForm', getLoginUserData);


module.exports = router; 