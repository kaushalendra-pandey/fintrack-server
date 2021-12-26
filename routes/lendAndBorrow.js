const express = require("express")
const { addLendAndBorrow, settleLendAndBorrow } = require("../controllers/lendAndBorrow")
const verifyToken = require("../middleware/auth")
const lendAndBorrowRoutes = express.Router()

lendAndBorrowRoutes.post("/add", verifyToken, addLendAndBorrow )
lendAndBorrowRoutes.post("/settle", verifyToken, settleLendAndBorrow)

module.exports = lendAndBorrowRoutes