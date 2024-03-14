const express = require('express');

const {
    createModule,
    getModule,
    getModulebySemester,
    updateModule,
    deleteModule
} = require('../controllers/moduleController')
//const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

// require auth for all workout routes
//router.use(requireAuth)

// Add new module
router.post('/', createModule)

// get module by id
router.get('/:id', getModule)

// get module by semester id 
router.get('/semester/:id', getModulebySemester)

// update module
router.patch('/:id', updateModule)

// delete module
router.delete('/:id', deleteModule)


module.exports = router;