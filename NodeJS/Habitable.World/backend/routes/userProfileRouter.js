const express = require("express");
const router = express.Router();

const { saveUserPostData, getUserPostData, getUserEditPostData, deleteUserPostData } =
    require("../controllers/userProfileController.js");


// router.post('/UserProfile', saveUserPostData);
// router.get('/UserProfile', getUserPostData);
// router.put('/UserProfile/:id', getUserEditPostData);
// router.delete('/UserProfile/:id', deleteUserPostData);
//router.post('/', saveUserPostData);

router.post('/UserProfile', upload.single("image"), saveUserPostData);
router.get('/', getUserPostData);
router.put('/:id', getUserEditPostData);
router.delete('/:id', deleteUserPostData);

module.exports = router;