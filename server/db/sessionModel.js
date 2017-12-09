const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  login: {type: String},
  name: {type: String},
  createdAt: { type: Date, expires: 30, default: Date.now },
  preferences: {},
  avatar: avatar_url,
  createdAt: Date.now()
});

module.exports = mongoose.model('Session', sessionSchema);