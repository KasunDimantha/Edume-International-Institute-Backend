const mongoose = require('mongoose')


const dbTeacherSchema = new mongoose.Schema({
    teacherID: String,
    fullName: String,
    email: String,
    contactNo: String,
    password: String
})

const DBTeacherModel = mongoose.model("dbTeacher", dbTeacherSchema)
module.exports = DBTeacherModel