const mongoose = require('mongoose');

const RadarSchema = new mongoose.Schema({
      subject:{
            type:String
       },
       soil_condition:{
           type:Number
       },
       weather_condition:{
          type:Number
       }
      
},
{timestamps:true}
)

module.exports = mongoose.model("Radar",RadarSchema )