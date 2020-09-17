const mongoose = require('mongoose')

const NewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    spotlightRank: {
        type: Number,
        default: 0 
    },
    spotlightTitle: {
        type: String
    },
    spotlightImage: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('New', NewSchema)