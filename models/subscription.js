const mongoose = require("mongoose")
const SubscriptionType = require("../enums/subscriptionType")

const subscriptionSchema = mongoose.Schema({
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
    type:{
        type:String,
        enum: SubscriptionType,
        default: SubscriptionType.monthly
    },
    description: {
        type:String
    }


},{timestamps:true})

module.exports = mongoose.model("subscription",subscriptionSchema)