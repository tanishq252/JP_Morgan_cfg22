const express = require('express');
const { radarChart } = require('../controllers/radarChartController');

const router = express.Router();

const {protect} = require("../middleware/authMiddleware")

router.get("/",protect,radarChart)


module.exports = router;