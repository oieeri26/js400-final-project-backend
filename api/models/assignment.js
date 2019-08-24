const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  assignmentTitle: String,
  projectLink: String,
  projectDescription: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = schema
