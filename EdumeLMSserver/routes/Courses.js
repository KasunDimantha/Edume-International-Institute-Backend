const express = require('express');
const router = express.Router();
const CourseModel = require('./models/dbCourses');


router.post('/register', (req, res) => {
    CourseModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

router.get('/allcourse', (req, res) => {
    CourseModel.find()
    .then(course => res.json(course))
    .catch(err => res.json(err))
})

module.exports = router;