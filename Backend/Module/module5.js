const mongoose = require('mongoose');

const LecturerSchema = new mongoose.Schema({
    name : String,
    password : String,
    sub : String
})

const LecturerModel = mongoose.model('lecturerLogin' , LecturerSchema)
module.exports = LecturerModel