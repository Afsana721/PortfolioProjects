const express = require('express');
const router = express.Router();
const { getRegisterPage, getLoginPage} = require('../controllers/authController.js')


router.get('/register', getRegisterPage);
router.get('/login', getLoginPage); 


module.exports = router;