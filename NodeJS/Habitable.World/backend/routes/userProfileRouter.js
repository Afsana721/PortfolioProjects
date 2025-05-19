const express = require("express");
const router = express.Router();

const { saveUserPostData, getUserPostData, getUserEditPostData, deleteUserPostData, upload } =
    require("../controllers/userProfileController.js");


router.post('/', upload.single("image"), saveUserPostData);
router.get('/', getUserPostData);
router.put('/:id', getUserEditPostData);
router.delete('/:id', deleteUserPostData);

module.exports = router;