const User = require("../models/user")
const Subscription = require("../models/subscription")
const SubscriptionType = require("../enums/subscriptionType")

module.exports.addSubscription = async (req,res) => {
    try {
        const user_id = req.user
        const {name,amount,type,description} = req?.body
        const alreadyExist = await Subscription.findOne({user_id, name})
        console.log(alreadyExist)
        if(alreadyExist) {
            return res.status(400).json({message:"Subscription with this schema already exists"})
        }

        const subscriptionType = type === "monthly" ? SubscriptionType?.monthly : SubscriptionType.yearly
        const subscription = await Subscription.create({
            name, amount, type:subscriptionType, description, user_id
        })

        return res.status(200).json({message:"Successfully create a subscription",subscription})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong"})
    }
}

module.exports.getSubscription = async (req,res) => {
    try {
        const user_id = req.user
        const allSubscriptions = await Subscription.find({user_id})
        return res.status(200).json({message:"All the subscription of user",subscription:allSubscriptions})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
}
