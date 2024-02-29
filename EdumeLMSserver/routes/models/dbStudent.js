const mongoose = require('mongoose')


const dbStudentSchema = new mongoose.Schema({
    studentID: String,
    fullName: String,
    email: String,
    contactNo: String,
    password: String
})

const DBStudentModel = mongoose.model("dbStudent", dbStudentSchema)
module.exports = DBStudentModel