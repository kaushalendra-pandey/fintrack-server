const express = require("express")
const subscriptionRoutes = express.Router()
const { addSubscription, getSubscription } = require("../controllers/subscription")
const verifyToken = require("../middleware/auth")

subscriptionRoutes.post("/", verifyToken,addSubscription)
subscriptionRoutes.get("/", verifyToken,getSubscription)
  
module.exports = subscriptionRoutes