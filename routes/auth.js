const User = require("../models/user");
const express = require("express")
const authRoutes = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Register
authRoutes.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).json({message:"User Already Exist. Please Login"});
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      return res.status(201).json({message:"Successfully registered user",user});
    } catch (err) {
      console.log(err);
      return res.status(500).json({message:"Something went wrong"});
    }
    // Our register logic ends here
  });
  
// Login
authRoutes.post("/login", async (req, res) => {
// our login logic goes here
try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      return res.status(200).json({message:"Successfully logged in",user});
    }
    return res.status(400).json({message:"Invalid Credentials"});
  } catch (err) {
    console.log(err);
    return res.status(500).json({message:"Something went wrong"});
  }
  // Our register logic ends here
});

module.exports = authRoutes