const mongoose = require('mongoose')


const dbStudentSchema = new mongoose.Schema({
    id: {type: String, required: true},
    fname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    cnumber: {type: Number, required: true},
    password: {type: String, required: true},
})

const DBStudentModel = mongoose.model("dbStudent", dbStudentSchema)
module.exports = DBStudentModel