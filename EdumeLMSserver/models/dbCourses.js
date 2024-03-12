const mongoose = require('mongoose')

const dbCourseSchema = new mongoose.Schema({
    course_name: {type: String, required: true},
    course_category: {type: String, required: true},
    course_description: {
        course_about: {type: String},
        course_outcomes: {type: String},
        course_modules: {type: String},
        course_duration: {type: String},
    }
})

const DBCourseModel = mongoose.model("dbCourse", dbCourseSchema)
module.exports = DBCourseModel