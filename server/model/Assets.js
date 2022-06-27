const mongoose = require('mongoose');
const AssetsSchema = new mongoose.Schema({
      asset_id:{
            type:Number,
            required:true,
        },
        asset_type:{
            type:String,
            required:true,
    
        },
        fuel_type:{
            type:String,
            required:true,
    
        },
},
{timestamps:true}
)

module.exports = mongoose.model("Assets",AssetsSchema)