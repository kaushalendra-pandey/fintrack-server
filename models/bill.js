const mongoose = require("mongoose")

const billSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    description: {
        type:String
    },
    status: {
        type: Boolean,
        default: false
    }


},{timestamps:true})

module.exports = mongoose.model("bill",billSchema)