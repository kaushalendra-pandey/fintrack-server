const mongoose = require("mongoose")

const user = mongoose.Schema({
    first_name: {
        type:String,
        require:true
    },
    last_name: {
        type:String,
        require:true 
    },
    email: {
        type:String,
        required:true,
        unique:true
    }, 
    password: {
        type:String,
        required:true
    },
    token:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model("user",user)