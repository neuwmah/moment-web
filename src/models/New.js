const mongoose = require("mongoose")
const Schema = mongoose.Schema

const New = new Schema({
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
    date: {
        type: Date,
        default: Date.now()
    },
    spotlight: {
        type: Number,
        default: 0 
    },
    spotlightTitle: {
        type: String
    },
    backgroundImage: {
        type: String
    }
})

mongoose.model("news", New)