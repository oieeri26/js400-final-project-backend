const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  assignmentTitle: String,
  projectLink: String,
  projectDescription: {
    type: String,
    min: 10
  },
  grade: Number,
  total: Number
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = schema