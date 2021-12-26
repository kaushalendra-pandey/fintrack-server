const mongoose = require("mongoose")
const TransactionType = require("../enums/lendAndBorrow")

const lendAndBorrowSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:TransactionType,
        default: TransactionType.borrow
    },
    settled: {
        type: Boolean,
        default: false
    },
    amount: {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("lend_and_borrow", lendAndBorrowSchema)