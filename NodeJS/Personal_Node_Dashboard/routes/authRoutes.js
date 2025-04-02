const express = require('express');
const router = express.Router();
const { getRegisterPage, getLoginPage, getUserData, getUserLoginData, getLogout }
    = require('../controllers/authController.js');


router.get('/register', getRegisterPage);
router.get('/login', getLoginPage);
router.post('/register', getUserData);
router.post('/login', getUserLoginData);
router.get('/logout', getLogout);
//router.get('*', getWrongUrl);
//router.post('/dashboard/edit', userEditNote);


module.exports = router;