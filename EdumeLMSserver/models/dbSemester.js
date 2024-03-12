const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    course_id: { type: String, required: true },
    semester_name: { type: String },
    semester_duration: { type: String },
})


module.exports = mongoose.model('dbSemester', semesterSchema)