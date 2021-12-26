const express = require("express")
const authRoutes = express.Router()
const { register,login} = require("../controllers/auth")

// Register
authRoutes.post("/register",register)
  
// Login
authRoutes.post("/login", login);

module.exports = authRoutes