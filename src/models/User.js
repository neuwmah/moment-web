const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("users", User)