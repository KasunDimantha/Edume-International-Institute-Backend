const Course = require('../models/dbCourses')
const mongoose = require('mongoose')



// Add new course
const createCourse = async (req, res) => {
    const {course_id, course_name, course_category, course_description} = req.body;

    try {
        const course = await Course.create({course_id, course_name, course_category, course_description})
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// get all course
const getAllCourses = async (req, res) => {

    try {
        const course = await Course.find({}).sort({ createdAt: -1 })
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// get a single course
const getCourse = async (req, res) => {
    const { id } = req.params

    try {
        const course = await Course.find({course_id: id})
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update course
const updateCourse = async (req, res) => {
    const { id } = req.params
  
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such course'})
          }
        
          const course = await Course.findOneAndUpdate({_id: id}, {
            ...req.body
          })
        
          if (!course) {
            return res.status(400).json({error: 'No such course'})
          }
        
          res.status(200).json(course)  
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  }

// Delete course
const deleteCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such course'})
    }

    const course = await Course.findOneAndDelete({course_id: id})

    if (!course) {
        return res.status(404).json({error: 'No such course.'})
    } 
    res.status(200).json(course)
}


module.exports = {
    createCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse
}