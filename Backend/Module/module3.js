const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const loginModel = mongoose.model("login" , loginSchema)
module.exports = loginModel