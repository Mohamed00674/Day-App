const mongoose = require("mongoose");

const TaskModel = mongoose.Schema({
  TaskTitle: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
    default: Date.now,
  },
  time: {
    required: true,
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
module.exports = new mongoose.model("Task", TaskModel, "Tasks");
