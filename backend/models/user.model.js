const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    pwd: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User