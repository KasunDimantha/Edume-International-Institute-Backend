const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    course_id: { type: String, required: true },
    semester_id: { type: String, required: true },
    module_id: { type: String },
    module_name: { type: String },
    module_category: {type: String},
    module_status: { type: String },
    module_credit: { type: Number },
    module_createDate: { type: Date }
})



module.exports = mongoose.model('dbModule', moduleSchema)