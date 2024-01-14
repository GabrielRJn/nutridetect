const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  goals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Goal' }],
  
});









const User = mongoose.model('User', userSchema);

module.exports = User;
