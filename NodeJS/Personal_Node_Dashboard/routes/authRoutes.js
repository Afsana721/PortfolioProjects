const express = require('express');
const router = express.Router();
const { getRegisterPage, getLoginPage, getUserData, getUserLoginData }
    = require('../controllers/authController.js');


router.get('/register', getRegisterPage);
router.get('/login', getLoginPage);
router.post('/register', getUserData);
router.post('/login', getUserLoginData);
//router.post('/dashboard/edit', userEditNote);


module.exports = router;