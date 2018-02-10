const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {type:String, required:true},
    avatar: String,
    email: String,
    preferences: Object,
    createdAt: {type: Date}
});

module.exports = mongoose.model('UserProfileData', userSchema);