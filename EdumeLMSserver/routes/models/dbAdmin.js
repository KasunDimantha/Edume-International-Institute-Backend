const mongoose = require('mongoose')


const dbAdminSchema = new mongoose.Schema({
    adminID: String,
    fullName: String,
    email: String,
    contactNo: String,
    password: String
})

const DBAdminModel = mongoose.model("dbAdmin", dbAdminSchema)
module.exports = DBAdminModel