const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://kasundimantha97:kasunEDUME97@cluster0.ook2x8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")



app.listen(3002, () => {
    console.log("server is running")
})