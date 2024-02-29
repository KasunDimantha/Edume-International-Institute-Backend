const mongoose = require('mongoose')


const dbAdminSchema = new mongoose.Schema({
    id: String,
    fname: String,
    email: String,
    cnumber: String,
    password: String,
})

const DBAdminModel = mongoose.model("dbAdmin", dbAdminSchema)
module.exports = DBAdminModel