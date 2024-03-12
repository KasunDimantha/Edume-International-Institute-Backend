const Semester = require('../models/dbSemester')
const mongoose = require('mongoose')

// Add new semester
const createSemester = async (req, res) => {
    const { course_id, semester_name, semester_duration} = req.body

    try {
        const semester = await Semester.create({ course_id, semester_name, semester_duration })
        res.status(200).json(semester)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// get semester by id
const getSenester = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such semester'})
        }
        
        const semester = await Semester.findById({_id: id});
    
        if (!semester) {
            return res.status(404).json({error: 'No such semester.'})
        } 
        res.status(200).json(semester)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// get semester By course id
const getSenesterbyCourse = async (req, res) => {
    const { id } = req.params

    try {
        
        const course = await Semester.findById({course_id: id}); 
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// update semester
const updateSemester = async (req, res) => {
    const { id } = req.params
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such semester'})
          }
        
          const semester = await Semester.findOneAndUpdate({_id: id}, {
            ...req.body
          })
        
          if (!semester) {
            return res.status(400).json({error: 'No such semester'})
          }
        
          res.status(200).json(semester)  
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  }

// delete semester
const deleteSemester = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such semester'})
    }

    const semester = await Semester.findOneAndDelete({_id: id})

    if (!semester) {
        return res.status(404).json({error: 'No such semester.'})
    } 
    res.status(200).json(semester)
}


module.exports = {
    createSemester,
    getSenester,
    getSenesterbyCourse,
    updateSemester,
    deleteSemester
}