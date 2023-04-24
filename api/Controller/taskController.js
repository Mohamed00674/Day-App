const express = require("express");
const Task = require("../model/Task");

exports.create = async (req, res) => {
  if (
    !req.body.TaskTitle &&
    !req.body.email &&
    !req.body.description &&
    !req.body.date &&
    !req.body.time
  ) {
    return res.status(400).send({ message: "all fields are required" });
  }

  const task = new Task({
    TaskTitle: req.body.TaskTitle,
    email: req.body.email,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
  });

  await task
    .save()
    .then((data) => {
      res.send({
        message: "TASK CREATED  SUCCESSFULLY ",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  Task.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Task not found",
        });
      } else {
        res.send({ message: "Task deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: "could not delete the task",
      });
    });
};

exports.findAll = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then((data) => {
      if (!data)
        return res.status(404).send({ message: "the task is not found " });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "error while retrieving the task " });
    });
};
exports.update = async (req, res) => {
  if (!req.body)
    return res.status(400).send({ message: "TASK TO UPDATE NOT FOUND" });
  const id = req.params.id;
  Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "CANNOT UPDATE THE TASK" });
      } else {
        res.send({ message: "TASK UPDATED SUCCESSFULLY" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "ERROR" });
    });
};
