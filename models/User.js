const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
  type: String,
  required: true,
  maxLength:8,
  minlength: 3,
  // match: /^(?!\s*$).+/,
  trim: true,

},
  userId:{
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;