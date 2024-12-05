const express = require('express');
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../Controllers/taskControllers.js");
const {auth}=require("../Middleware/authMiddleware.js")
const router = express.Router();

router.post('/createTask', auth, createTask);
router.get('/getAllTask', auth, getTasks);
router.get('/getTaskById/:id', auth, getTask);
router.put('/updateTask/:id', auth, updateTask);
router.delete('/DeleteTask/:id', auth, deleteTask);

module.exports = router;
