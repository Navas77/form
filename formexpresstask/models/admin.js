const mongoose=require("mongoose")
const useradmin=mongoose.Schema({

    name:{
        type:String
    },
    emailid:{
        type:String
    },
    age:{
        type:Number
    }
})
const adminModel=mongoose.model("hm2 data",useradmin)
module.exports=adminModel