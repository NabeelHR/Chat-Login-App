const mongoose = require('mongoose')


const sessionSchema = new mongoose.Schema({
    userId: {  
        type: Number,
        default: 1
    },
    timestamp: {
        type: Date,
        Defaul: Date.now()
    },
    username: {
        type: String,
    }
}, {
    timestamps: true,
})

const Session = mongoose.model('session', sessionSchema)

module.exports = Session