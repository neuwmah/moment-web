const mongoose = require('mongoose')

const ChangeSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: [],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    lastEdit: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

module.exports = mongoose.model('Change', ChangeSchema)