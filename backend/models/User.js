const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true }, // Add name field
  phone: { type: String, required: true }, // Add phone field
});

module.exports = mongoose.model('User', userSchema);
