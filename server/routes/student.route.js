const express = require('express');
const studentRouter = express.Router();
const Student = require('../models/Student.model');

studentRouter.route('/')
  .get((req, res) => {
    Student.find({})
      .then(student => {
        res.json(student);
      })
      .catch(err => {
        res.status(500).send(`can't get all students`);
      });
  })
  .post((req, res) => {
    Student.create(req.body)
      .then(student => {
        res.status(201).send(student);
      })
      .catch(err => {
        res.send(`can't create a student`);
      });
  });

studentRouter.route('/:id')
  .get((req, res) => {
    Student.findOne({
      _id: req.params.id
    })
      .then(student => {
        res.send(student);
      })
      .catch(err => {
        res.status(500).send(`can't get the student by ID`);
      });
  })
  .put((req, res) => {
    Student.findByIdAndUpdate(
      req.params.id, {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dateOfBirth: req.body.dateOfBirth
        }
      }, {
        new: true
      })
      .then(student => {
        res.send(student);
      })
      .catch(err => {
        res.status(500).send(`can't update the student`);
      });
  })
  .delete((req, res) => {
    Student.findOneAndRemove({
      _id: req.params.id
    })
    .then(() => {
      res.status(204).send('deleted');
    })
    .catch(err => {
      res.status(500).send(`can't remove the student`);
    });
  });

module.exports = studentRouter;
