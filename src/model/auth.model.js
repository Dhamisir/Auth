const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Students', "Instructor", "Admin"],
        default: "Students"
    }
})

const authModel = mongoose.model("auth", authSchema);
module.exports = authModel;