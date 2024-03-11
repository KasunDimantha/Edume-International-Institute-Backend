const mongoose = require('mongoose')

const dbCourseSchema = new mongoose.Schema({
    id: {type:String, required: true},
    cname: {type: String, required: true},
    category: {type: String, required: true},
    description: {
        about: {type: String},
        outcomes: {type: String},
        modules: {type: String},
        duration: {type: String},
    }
})

const DBCourseModel = mongoose.model("dbCourse", dbCourseSchema)
module.exports = DBCourseModel