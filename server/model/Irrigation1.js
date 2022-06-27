const mongoose = require('mongoose');

const IrrigationSchema = new mongoose.Schema({
      name:{
            type:String
      },
      Drip_Irrigation: {
            type:String
      },
      Sprinkler: {
            type:String
      },
      Manual:{
            type:String
      }
      
},
{timestamps:true}
)

module.exports = mongoose.model("Irrigation",IrrigationSchema)