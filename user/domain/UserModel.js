const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        default: () => new mongoose.Types.ObjectId().toString()
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    avatarURL: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    displayName: String,
    avatarUrl: String,
    bio: String,
    birthdate: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;