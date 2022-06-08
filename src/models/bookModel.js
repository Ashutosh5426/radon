const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  author_id: String,
  price: Number,
  ratings: String
}, {timestamps: true});

module.exports = mongoose.model('NewBook', bookSchema);