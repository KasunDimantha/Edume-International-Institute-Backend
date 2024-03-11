const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const admin = require('./routes/Admin');
const teacher = require('./routes/Teacher');
const student = require('./routes/Student');
const course = require('./routes/Courses');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://kasundimantha97:kasunEDUME97@cluster0.ook2x8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.use('/Admin', admin);
app.use('/Teacher', teacher);
app.use('/Student', student);
app.use('/Course', course);


app.listen(3002, () => {
    console.log("server is running")
})