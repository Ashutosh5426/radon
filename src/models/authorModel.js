const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  author_id: {
    type: String,
    required: true
  },
  author_name: String,
  age: String,
  address: String
}, {timestamps: true});

module.exports = mongoose.model('Author', authorSchema)

