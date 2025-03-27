const express = require('express');
const router = express.Router();

const {
    getDashboardPage,
    postUserNote,
    upload, 
    getEditData, 
    deleteUserPost
} = require('../controllers/dashboardController');

router.get('/dashboard', getDashboardPage);
router.post('/dashboard', upload.single('noteImage'), postUserNote);
router.post('/dashboard/edit', upload.single('noteImage'), getEditData);
router.post('/dashboard/delete', deleteUserPost);

module.exports = router;
