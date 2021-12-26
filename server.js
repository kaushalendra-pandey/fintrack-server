require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB CONNECTED")
    } catch (error) {
        console.log(error)
    }
}

connectToDB()