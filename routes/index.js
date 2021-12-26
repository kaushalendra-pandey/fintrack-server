const express = require("express");
const lendAndBorrowRoutes = require("./lendAndBorrow");
const allRoutes = express.Router()
const userRoutes = require("./user")

allRoutes.use("/user",userRoutes)
allRoutes.use("/lendAndBorrow",lendAndBorrowRoutes);

module.exports = allRoutes;