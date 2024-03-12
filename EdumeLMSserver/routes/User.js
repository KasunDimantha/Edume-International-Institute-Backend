const express = require("express")

// controller function
const {
    getAllUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all user routes
router.use(requireAuth)


// get all student/teacher/admin(seperatlly)
router.get('/:role', getAllUser)

// get a single student/teacher/admin
router.get('/:id', getUser)

// delete a student/teacher/admin
router.delete('/:id', deleteUser)

// update a student/teacher/admin
router.patch('/:id', updateUser)

module.exports = router