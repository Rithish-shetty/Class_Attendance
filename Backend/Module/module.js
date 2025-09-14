const mongoose = require('mongoose');

const SESchema = new mongoose.Schema({
    regNo : String,
    name : String,
    se : Number,
    mern : Number,
    dip : Number,
    lamp : Number,
    se_total : Number,
    mern_total : Number,
    dip_total : Number,
    lamp_total : Number,
})

const SEModel = mongoose.model('SE' , SESchema)
module.exports = SEModel

// const docSchema = new mongoose.Schema({
//     id : String,
//     name : String,
//     regno : String,
//     present : Number,
//     date : String
// })

// const docModel = mongoose.Model('DOC' , docSchema)
// module.exports = docModel