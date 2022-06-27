const express = require('express');
const { pie } = require('../controllers/piechartController');
const router = express.Router();

const {protect} = require("../middleware/authMiddleware")

router.get("/",protect,pie)

module.exports = router;