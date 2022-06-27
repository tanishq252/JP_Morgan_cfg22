const asyncHandler = require('express-async-handler');
const Cultivation = require('../model/Cultivation');
const RadialCurve = require('../model/RadialCurve');

const radarCurve = asyncHandler(async(req,res) =>{
      try {
            const radar = await RadialCurve.find({})
            res.status(200).json(radar)
      } catch (error) {
            console.log(error.message);
      }
})


module.exports = {
	radarCurve,
};