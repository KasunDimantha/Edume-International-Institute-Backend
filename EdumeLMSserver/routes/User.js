const express = require("express")

// controller function
const {
    signupUser,
    loginUser,
    getAllUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

// get all student/teacher/admin(seperatlly)
router.get('/:role', getAllUser)

// get a single student/teacher/admin
router.get('/:id', getUser)

// delete a student/teacher/admin
router.delete('/:id', deleteUser)

// update a student/teacher/admin
router.patch('/:id', updateUser)

module.exports = router