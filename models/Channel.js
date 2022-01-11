const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
  admin: String,
  participants: [String],
  messages: [{newMessage: String, fullName: String}]
})

const User = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;