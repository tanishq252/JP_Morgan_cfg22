const asyncHandler = require('express-async-handler');
const Radar = require('../model/Radar');

const radarChart = asyncHandler(async(req,res) =>{
      try {
            const radar= await Radar.find({})
            res.status(200).json(radar);
      } catch (error) {
            console.log();
      }
})


module.exports = {
	radarChart ,
};