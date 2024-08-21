const express = require('express');
const { getHomePage, backend } = require('../controllers/homeController');
const router = express.Router();

//route.Methob('/Path',handle)
router.get('/', getHomePage)
//static file

router.get('/backend', backend)

module.exports = router;