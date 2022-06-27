const mongoose = require('mongoose');

const Radialcurve = new mongoose.Schema({
      name:{
            type:String
       },
       wages:{
           type:Number
       },
       fill:{
          type:String
       }
      
},
{timestamps:true}
)

module.exports = mongoose.model("RadialCurve",Radialcurve)