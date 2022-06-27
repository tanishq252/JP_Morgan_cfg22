const mongoose = require('mongoose');
const CultivationSchema = new mongoose.Schema({
      name:{
            type:String
          },
          value:{
             type:Number
          },
          wages:{
            type:Number
          }
},
{timestamps:true}
)

module.exports = mongoose.model("Cultivation",CultivationSchema)