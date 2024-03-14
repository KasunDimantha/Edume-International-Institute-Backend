const express = require('express');

const {
    createSemester,
    getSenester,
    getSenesterbyCourse,
    updateSemester,
    deleteSemester
} = require('../controllers/semesterController')
//const requireAuth = require('../middleware/requireAuth')


const router = express.Router();

// require auth for all workout routes
//router.use(requireAuth)

// Add new semester
router.post('/', createSemester)

// get semester by id
router.get('/:id', getSenester)

// get semester By course id
router.get('/course/:id', getSenesterbyCourse)

// update semester
router.patch('/:id', updateSemester)

// delete semester
router.delete('/:id', deleteSemester)


module.exports = router;