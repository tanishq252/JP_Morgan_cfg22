const asyncHandler = require('express-async-handler');
const Irrigation1 = require('../model/Irrigation1');

const area = asyncHandler(async(req,res) =>{

      try {
      const Irrigation = await Irrigation1.find({});

      // await ir.save();

            res.status(200).send(Irrigation);
      } catch (error) {
            console.log(error.message);
      }
})


module.exports = {
	area,
};