const mongoose = require('mongoose');


const FarmerSchema = new mongoose.Schema({
  
      Contact_Number:{
            type:String,
        },
        Aadhaar_Number:{
            type:Number,
    
        },
        Khasra_Number:{
            type:Number,
            
    
        },
        Survey_Number:{
            type:Number,
           
    
        },
        Postal_Address:{
            type:Number,
            
    
        },
        name_of_the_crop:{
            type:String,
            
    
        },
        number_of_seedlings:{
            type:Number,
            
    
        },
        cultivation_area:{
            type:String,
            
    
        },
        number_of_Cows:{
            type:Number,
            
    
        },
        number_of_Bufalloes:{
            type:Number,
            
    
        },
        date_of_plantation:{
            type:String,
            
    
        },
        number_of_days:{
            type:Number,
            
    
        },
        date_of_Input:{
            type:String,
           
    
        },
        input_Type:{
            type:String,
            
    
        },
        date_of_Weeding:{
            type:String,
      
    
        },
        date_of_Harvest:{
            type:String,
            
    
        },
        harvest_Volume:{
            type:String,
       
    
        },
        no_of_labours:{
            type:Number,
            
    
        },
        wages:{
            type:Number,
          
    
        },
        assets_expense:{
            type:Number,
            
    
        },
        net_revenue:{
            type:Number,
            
    
        },
        soil_type:{
            type:String,
            
    
        },
        irrigation_system:{
            type:String,
            
    
        },
  
},
{timestamps:true}
)

module.exports = mongoose.model("Farmer",FarmerSchema)