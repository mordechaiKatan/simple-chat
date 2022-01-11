require('dotenv').config({ encoding: 'utf8' });

module.exports = {
    mongoUri: process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : 'mongodb://localhost:27017/moty-chat',
    port: process.env.PORT || 8080
  }