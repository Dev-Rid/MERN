const mongoose = require("mongoose")

const userSchema = new mongoose.Schmena({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],

    },
})

const User = mongoose.model("User",userSchema) // create a user model from the schema
module.exports = User // export the user model