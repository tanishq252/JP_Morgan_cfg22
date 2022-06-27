const asyncHandler = require('express-async-handler');
const Pi = require('../model/Pi');

const pie= asyncHandler(async(req,res) =>{
      try {
            const pi = await Pi.find({});
                  newObject = pi.map(function (value) {
                      console.log(value.get('0')['name']);
                  }); 
            console.log(newObject);
            res.status(200).json(pi)

      } catch (error) {
            console.log(error.message);
      }
})


module.exports = {
	pie,
};