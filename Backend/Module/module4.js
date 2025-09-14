const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name : String,
    password : String,
    email : String
})

const adminModel = mongoose.model('adminLogin' , adminSchema)
module.exports = adminModel