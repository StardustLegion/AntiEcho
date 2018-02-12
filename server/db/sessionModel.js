const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({

  login: {type: String},
  createdAt: { type: Date, expires: 300, default: Date.now }

});

module.exports = mongoose.model('Session', sessionSchema);