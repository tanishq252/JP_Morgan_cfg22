const express = require('express');
const { radarCurve } = require('../controllers/radarCurveController');
const router = express.Router();

const {protect} = require("../middleware/authMiddleware")

router.get("/",protect,radarCurve)

module.exports = router;