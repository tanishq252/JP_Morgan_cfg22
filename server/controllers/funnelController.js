const asyncHandler = require('express-async-handler');
const Cultivation = require('../model/Cultivation');

const funnel= asyncHandler(async(req,res) =>{
      try {
           const funnel = await Cultivation.find({});
           res.status(200).json(funnel);
      } catch (error) {
            console.log(error.message);
      }
})


module.exports = {
	funnel,
};