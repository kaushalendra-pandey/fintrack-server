const express = require("express")
const billRouter = express.Router()
const { addBill, payBill, getPaidBill, getUnpaidBills } = require("../controllers/bill")
const verifyToken = require("../middleware/auth")

billRouter.post("/", verifyToken,addBill)
billRouter.post("/pay", verifyToken,payBill)
billRouter.get("/paid",verifyToken, getPaidBill)
billRouter.get("/unpaid", verifyToken, getUnpaidBills)

module.exports = billRouter