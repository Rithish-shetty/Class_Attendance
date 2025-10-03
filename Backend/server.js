const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const SEModel = require('./Module/module')
const docModel = require('./Module/model2')
const loginModel = require('./Module/module3')
const { format } = require('date-fns')
const adminModel = require('./Module/module4')
const LecturerModel = require('./Module/module5')
const e = require('express')

const app = express()

const PORT = process.env.PORT || 3001; // ✅ Use Render's PORT

app.use(cors())
app.use(express.json())

const MONGO_URI = "mongodb+srv://rithishsr77_db_user:<db_password>@cluster0.m38yfra.mongodb.net/Subject?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB connection error:", err));

    const today = new Date()
    const day = today.getDay()
    const date = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()

    let ac_day;
    
    switch(day){
        case 0:
            ac_day = "Sunday"
            break;
        case 1:
            ac_day = "Monday"
            break;
        case 2:
            ac_day = "Tuesday"
            break;
        case 3:
            ac_day = "Wednesday"
            break;
        case 4:
            ac_day = "Thursday"
            break;
        case 5:
            ac_day = "Friday"
            break;
        case 6:
            ac_day = "Saturday"
            break;
    }

    const current_date = `${date} / ${month} / ${year} - ${ac_day}`

    console.log( "current_date" , current_date)

//creating student collection
app.post('/create' , (req , res) => {
    SEModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err) )

    // docModel.create(req.body)
})


//creating collection for history
app.post('/createDoc' , (req , res) => {
    docModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err) )
})

//getting studend details
app.get('/getStudent' , (req , res) => {
    SEModel.find({})
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

//get Lecturer details
app.get('/getLecturer' , (req , res) => {
    LecturerModel.find({})
    .then(lecturer => res.json(lecturer))
    .catch(err => res.json(err))
})


//getting history details
app.get(('/history/:att/:name/:id') , (req,res) => {
    const att = req.params.att
    const name = req.params.name;
    const id = req.params.id;
    console.log("h present" , att)
    console.log("h name" , name)
    console.log("h id " , id)
    docModel.findOne({docId : id})
    .then(student => res.json(student))
    .catch(err => res.json(err))
})


//adding ses attendance
app.put(('/add/:id') , (req , res) => {
    const {id} = req.params;
    console.log(id , "passed put id of se")
    const arr = id.split(',')
    SEModel.updateMany({_id : {$in : arr}} , {$inc : {se : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding mern attendance
app.put(('/mern/add/:id') , (req , res) => {
    const {id} = req.params;
    console.log(id , "passed put id mern")
    const arr = id.split(',')
    SEModel.updateMany({_id : {$in : arr}} , {$inc : {mern : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding lamp att
app.put(('/lamp/add/:id') , (req , res) => {
    const {id} = req.params;
    console.log(id , "passed put id of lamp")
    const arr = id.split(',')
    SEModel.updateMany({_id : {$in : arr}} , {$inc : {lamp : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})


//adding dip att
app.put(('/dip/add/:id') , (req , res) => {
    const {id} = req.params;
    console.log(id , "passed put id of dip")
    const arr = id.split(',')
    SEModel.updateMany({_id : {$in : arr}} , {$inc : {dip : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})


//adding date to history of se
app.put(('/seDate/add/:id') , (req , res) => {
    console.log(format(req.body.selectedDate , "dd/MM/yyyy") , "se date body")
    const {id} = req.params;
    console.log(id , "passed put of se date id")
    const arr1 = id.split(',')
    docModel.updateMany({docId : {$in : arr1}} , {$push: {se_date : format(req.body.selectedDate , "dd/MM/yyyy") , se_present : "Present"}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding date to hostory of mern
app.put(('/mernDate/add/:id') , (req , res) => {
    console.log(format(req.body.selectedDate , "dd/MM/yyyy") , "mern date body")
    const {id} = req.params;
    console.log(id , "passed put of mern date id")
    const arr1 = id.split(',')
    docModel.updateMany({docId : {$in : arr1}} , {$push: {mern_date : format(req.body.selectedDate , "dd/MM/yyyy") , mern_present : "Present"}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding date to hostory of dip
app.put(('/dipDate/add/:id') , (req , res) => {
    console.log(format(req.body.selectedDate , "dd/MM/yyyy") , "dip date body")
    const {id} = req.params;
    console.log(id , "passed put of dip date id")
    const arr1 = id.split(',')
    docModel.updateMany({docId : {$in : arr1}} , {$push: {dip_date : format(req.body.selectedDate , "dd/MM/yyyy") , dip_present : "Present"}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding date to hostory of lamp
app.put(('/lampDate/add/:id') , (req , res) => {
    console.log(format(req.body.selectedDate , "dd/MM/yyyy") , "lamp date body")
    const {id} = req.params;
    console.log(id , "passed put of lamp date id")
    const arr1 = id.split(',')
    docModel.updateMany({docId : {$in : arr1}} , {$push: {lamp_date : format(req.body.selectedDate) , lamp_present : "Present"}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

app.get(('/getDetails/:id') , (req , res) => {
    const {id} = req.params;
    console.log(id , "passed id")
    SEModel.findById({_id : id})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})


app.put(('/remove/:id') , (req , res) => {
    const {id} = req.params;
    SEModel.findByIdAndUpdate(id , {$inc : {se : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

app.put(('/mern/remove/:id') , (req , res) => {
    const {id} = req.params;
    SEModel.findByIdAndUpdate(id , {$inc : {mern : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

app.put(('/lamp/remove/:id') , (req , res) => {
    const {id} = req.params;
    SEModel.findByIdAndUpdate(id , {$inc : {lamp : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

app.put(('/dip/remove/:id') , (req , res) => {
    const {id} = req.params;
    SEModel.findByIdAndUpdate(id , {$inc : {dip : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//user Registration updating
app.post('/register' , (req , res) => {
    loginModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

//creating lecturer collection
app.post('/createLecturer' , (req , res) => {
    console.log("req body of lecturer" , req.body)
    LecturerModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

//user login checking
app.post('/login' , (req , res) => {
    console.log(req.body , "reqbody of login")
    loginModel.findOne(req.body)
    .then(user => {
        console.log(user)
        if(user){
            if(user.password === req.body.password){
                res.json("success")
            }
            else{
                res.json("mismatch")
            }
        }
        else{
                res.json("not registered")
        }
    })
})

//Admin login checking
app.post('/adminLogin' , (req , res) => {
    console.log(req.body , "reqbody of login")
    adminModel.findOne(req.body)
    .then(user => {
        console.log("user" , user)
        if(user){
            if(user.password === req.body.password){
                res.json("success")
            }
            else{
                console.log("Wrong passs")
            }
        }
        else{
                console.log("user not found")
        }
    })
})

//Lecture login checking
app.post('/LectureLogin' , (req , res) => {
    console.log(req.body , "reqbody of login")
    LecturerModel.findOne(req.body)
    .then(user => {
        console.log("user" , user)
        if(user){
            if(user.sub === "SE" && user.password === req.body.password){
                res.json("SE")
            }
            else if(user.sub === "MERN" && user.password === req.body.password){
                res.json("MERN")
            }
            else if(user.sub === "DIP" && user.password === req.body.password){
                res.json("DIP")
            }
            else if(user.sub === "LAMP" && user.password === req.body.password){
                res.json("LAMP")
            }
            else{
                res.json("mismatch")
            }
        }
        else{
                console.log("user not found")
        }
    })
})

//deleting student hererer
app.delete('/SEModel/delete/:id' , (req , res) => {
    const {id} = req.params;
    console.log("delete id of SEModel" , id)
    SEModel.findByIdAndDelete({_id : id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/DOCModel/delete/:id' , (req , res) => {
    const {id} = req.params;
    console.log("delete id of DOCModel" , id)
    docModel.findByIdAndDelete({docId : id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

//deleting lecturer
app.delete('/LecturerModel/delete/:id' , (req , res) => {
    const {id} = req.params;
    console.log("delete id of LecturerModel" , id)
    LecturerModel.findByIdAndDelete({_id : id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})       

//adding class to se total
app.put(('/seDate/addClass') , (req , res) => {
    SEModel.updateMany({} , {$inc : {se_total : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding class to mern total
app.put(('/mernDate/addClass') , (req , res) => {
    SEModel.updateMany({} , {$inc : {mern_total : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding class to dip total
app.put(('/dipDate/addClass') , (req , res) => {
    SEModel.updateMany({} , {$inc : {dip_total : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//adding class to lamp total
app.put(('/lampDate/addClass') , (req , res) => {
    SEModel.updateMany({} , {$inc : {lamp_total : 1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//removing class from se total
app.put(('/seDate/removeClass') , (req , res) => {
    SEModel.updateMany({se_total : {$gt : 0}} , {$inc : {se_total : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//removing class from mern total
app.put(('/mernDate/removeClass') , (req , res) => {
    SEModel.updateMany({mern_total : {$gt : 0}} , {$inc : {mern_total : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//removing class from dip total 
app.put(('/dipDate/removeClass') , (req , res) => {
    SEModel.updateMany({dip_total : {$gt : 0}} , {$inc : {dip_total : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//removing class from lamp total
app.put(('/lampDate/removeClass') , (req , res) => {
    SEModel.updateMany({lamp_total : {$gt : 0}} , {$inc : {lamp_total : -1}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//setting no of class for se
app.put(('/se_total') , (req , res) => {
    console.log("req body of total class" , req.body)
    SEModel.updateMany({} , {$set : {se_total : req.body.totalClass}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//setting no of class for mern
app.put(('/mern_total') , (req , res) => {
    console.log("req body of total class" , req.body)
    SEModel.updateMany({} , {$set : {mern_total : req.body.totalClass}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//setting no of class for dip
app.put(('/dip_total') , (req , res) => {
    console.log("req body of total class" , req.body)
    SEModel.updateMany({} , {$set : {dip_total : req.body.totalClass}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})

//setting no of class for lamp
app.put(('/lamp_total') , (req , res) => {
    console.log("req body of total class" , req.body)
    SEModel.updateMany({} , {$set : {lamp_total : req.body.totalClass}} , {new : true})
    .then(student=> res.json(student))
    .catch(err => res.json(err))
})




app.listen(PORT , () => {
    console.log("server is runningg")
})