const mongoose = require('mongoose');
const PiSchema = new mongoose.Schema({
    Data_no:{
        type:Number
      },
      Profit:{
        type:Number
      },
      Loss:{
        type:Number
      }
},
{timestamps:true}
)

module.exports = mongoose.model("Pi",PiSchema)