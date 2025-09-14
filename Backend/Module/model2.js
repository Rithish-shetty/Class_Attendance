const mongoose = require('mongoose')

const docSchema = new mongoose.Schema({
    docId : String,
    name : String,
    regNo : String,
    date : String,
    se_date: [String],
    mern_date: [String],
    dip_date: [String],
    lamp_date : [String],
    se_present : [String],
    mern_present: [String],
    dip_present: [String],
    lamp_present: [String],
})

const docModel = mongoose.model('DOC' , docSchema)
module.exports = docModel