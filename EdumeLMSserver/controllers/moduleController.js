const Module = require('../models/dbModule')
const mongoose = require('mongoose')


// Add new module
const createModule = async (req, res) => {
    const { 
        course_id, 
        semester_id, 
        module_id,
        module_name,
        module_category,
        module_status,
        module_credit,
        module_createDate
    } = req.body

    try {
        const module = await Module.create({ 
            course_id, 
            semester_id, 
            module_id,
            module_name,
            module_category,
            module_status,
            module_credit,
            module_createDate
        })
        res.status(200).json(module)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// get module by id
const getModule = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such module'})
        }
        
        const module = await Module.findById({_id: id});
    
        if (!module) {
            return res.status(404).json({error: 'No such module.'})
        } 
        res.status(200).json(module)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// get module by semester id 
const getModulebySemester = async (req, res) => {
    const { id } = req.params

    try {
        
        const module = await Module.find({semester_id: id}); 
        res.status(200).json(module)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// update module
const updateModule = async (req, res) => {
    const { id } = req.params
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such module'})
          }
        
          const module = await Module.findOneAndUpdate({_id: id}, {
            ...req.body
          })
        
          if (!module) {
            return res.status(400).json({error: 'No such module'})
          }
        
          res.status(200).json(module)  
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  }

// delete module
const deleteModule = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such module'})
        }
    
        const module = await Module.findOneAndDelete({_id: id})
    
        if (!module) {
            return res.status(404).json({error: 'No such module.'})
        } 
        res.status(200).json(module)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports = {
    createModule,
    getModule,
    getModulebySemester,
    updateModule,
    deleteModule
}