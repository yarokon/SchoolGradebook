const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date
});

// const studentSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   surname: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   created_at: {
//     type: Date,
//     default: Date.now()
//   },
//   updated_at: Date
// });

module.exports = mongoose.model('Student', studentSchema);
