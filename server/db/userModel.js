const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    id: Number,
    avatar: String,
    email: String,
    preferences: Object,
    createdAt: {type: Date}
});

module.exports = mongoose.model('userProfileData', userSchema);