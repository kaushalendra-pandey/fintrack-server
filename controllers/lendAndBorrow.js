const lendAndBorrowSchema = require("../models/lendAndBorrow")
const TransactionType = require("../enums/lendAndBorrow")

module.exports.addLendAndBorrow = async(req,res) => {
    try {
        const user_id = req.user
        const {type,name,amount} = req?.body
        const transaction = await lendAndBorrowSchema.create({
            user_id,
            name,
            amount,
            type: type === "LEND" ? TransactionType.lend : TransactionType.borrow

        })
        return res.status(200).json({message:'Successfully added Transaction',transaction})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Something went wrong.'})
    }
}

module.exports.settleLendAndBorrow = async (req,res) => {
    try {
        const {record_id} = req?.body
        const user_id = req.user
        const isAuthorized = await lendAndBorrowSchema.findOne({_id:record_id, user_id})
        if(!isAuthorized) {
            return res.status(401).json({message: "Not authorized to settle this record"})
        }
        isAuthorized.settled = true
        await isAuthorized.save()

        return res.status(200).json({message:'Successfully settled the record',isAuthorized})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong"})
    }
    
}