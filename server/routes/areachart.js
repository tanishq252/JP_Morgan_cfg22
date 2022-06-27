const express = require('express');
const { area } = require('../controllers/areaController');
const router = express.Router();

const {protect} = require("../middleware/authMiddleware")


router.get("/",protect,area )

module.exports = router;