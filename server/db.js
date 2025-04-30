const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  type: String,
  location: String,
  description: String,
});

module.exports = mongoose.model('Report', reportSchema);