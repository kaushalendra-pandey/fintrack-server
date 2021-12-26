require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const allRoutes = require("./routes/index")
const authRoutes = require("./routes/auth")

const app = express()

const PORT = process.env.PORT

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB CONNECTED")
    } catch (error) {
        console.log(error)
    }
}
connectToDB()

app.use(express.json());
app.use(cors())
app.use("/auth",authRoutes)
app.use("/api",allRoutes)


app.listen(PORT, () => {
    console.log("Listening to PORT: ",PORT)
})