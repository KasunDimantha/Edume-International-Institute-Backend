require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const userlsRoutes = require('./routes/UserLS');
const userRoutes = require('./routes/User');
//const adminRoutes = require('./routes/Admin');
//const teacherRoutes = require('./routes/Teacher');
const studentRoutes = require('./routes/Student');
//const courseRoutes = require('./routes/Courses');

//express app
const app = express();
app.use(cors());


// midlware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


app.use('/UserLS', userlsRoutes);
app.use('/User', userRoutes);
//app.use('/Admin', adminRoutes);
//app.use('/Teacher', teacherRoutes);
app.use('/Student', studentRoutes);
//app.use('/Course', courseRoutes);

// connect to db
mongoose.connect(process.env.MONG_URL)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("server is running")
        })
    })
    .catch((error) => console.log(error))



