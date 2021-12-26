const express = require("express");
const lendAndBorrowRoutes = require("./lendAndBorrow");
const allRoutes = express.Router()
const userRoutes = require("./user")
const subscriptionRoutes = require("./subscription");
const billRouter = require("./bill");

allRoutes.use("/user",userRoutes)
allRoutes.use("/lendAndBorrow",lendAndBorrowRoutes);
allRoutes.use("/subscription",subscriptionRoutes)
allRoutes.use("/bill",billRouter)

module.exports = allRoutes;