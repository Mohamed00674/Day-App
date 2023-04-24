const express = require('express')
const taskController = require('../Controller/taskController')
const router = express.Router()


router.post('/' , taskController.create )
router.delete('/:id' , taskController.deleteTask )
router.get('/' , taskController.findAll)
router.get('/:id' , taskController.findOne )
router.put('/:id' , taskController.update)


module.exports = router

