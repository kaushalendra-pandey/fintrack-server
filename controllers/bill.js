const User = require("../models/user")
const Bill = require("../models/bill")

module.exports.addBill = async (req,res) => {
    try {
        const user_id = req.user
        const {name,amount,description} = req?.body

        const alreadyExist = await Bill.findOne({user_id, name})
        if(alreadyExist) {
            return res.status(400).json({message:'A bill already exist with this name'})
        }
        const bill = await Bill.create({name,amount,user_id,description})
        return res.status(200).json({message:"Successfully created a bill",bill})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong"})
    }
}

module.exports.payBill = async (req,res) => {
    try {
        const user_id = req.user
        const {bill_id} = req?.body
        const bill = await Bill.findOne({user_id, _id:bill_id})
        if(!bill) {
            return res.status(400).json({message:'You cannot pay this bill'})
        }
        console.log(">>",bill)
        bill.status = true
        await bill.save()
        return res.status(200).json({message:"Status of the bill updates",bill})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong."})
    }
}

module.exports.getPaidBill = async (req,res) => {
    try {
        const user_id = req.user
        const paidBills = await Bill.find({user_id, status:true}).sort({updatedAt:-1})
        return res.status(200).json({message:"List of the all the paid bill",paidBills})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
}

module.exports.getUnpaidBills = async (req,res) => {
    try {
        const user_id = req.user
        const unpaidBills = await Bill.find({user_id, status:false}).sort({updatedAt:-1})
        return res.status(200).json({message:"List of the all the unpaid bills",unpaidBills})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
}

