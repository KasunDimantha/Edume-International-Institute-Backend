const express = require('express');
const router = express.Router();
const StudentModel = require('../models/dbStudent')


router.post('/register', (req, res) => {
    StudentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

router.post('/update', (req,res) => {
    
})

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    StudentModel.findOne({email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Success")
            } else {
                res.json("Password is incorect")
            }
        } else {
            res.json("user not exist")
        }
    })
})

router.get('/fStudent', (req, res) => {
    const {email} = req.body;
    StudentModel.find()
    .then(students => res.json(students))
    .catch(err => res.json(err))
})
router.get('/getStudent/:email', (req, res) => {
    const email = req.params.email;
    console.log(email)
    StudentModel.findOne({email})
    .then(students => res.json(students))
    .catch(err => res.json(err))
  });

module.exports = router;