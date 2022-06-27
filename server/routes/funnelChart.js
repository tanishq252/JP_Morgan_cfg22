const express = require('express');
const { funnel } = require('../controllers/funnelController');
const router = express.Router();

const {protect} = require("../middleware/authMiddleware")

router.get("/",protect,funnel)

module.exports = router;