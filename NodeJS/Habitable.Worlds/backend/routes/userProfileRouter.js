const express = require("express");
const router = express.Router();

const getUserPostData = require("../controllers/userProfileController.js");


router.post('/UserProfile', getUserPostData);


module.exports = router;