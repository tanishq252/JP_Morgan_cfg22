const mongoose = require('mongoose');

const LaboursSchema = new mongoose.Schema({
      name:{
            type:String,
        },
        aadhar_no:{
            type:Number,
        },
        gender:{
            type:String,
        },
},
{timestamps:true}
)

module.exports = mongoose.model("labour",LaboursSchema)