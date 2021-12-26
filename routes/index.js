const express = require("express")
const allRoutes = express.Router()
const userRoutes = require("./user")

allRoutes.use("/user",userRoutes)

module.exports = allRoutes;