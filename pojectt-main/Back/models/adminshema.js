const mongoose= require ('mongoose')
const Schema = mongoose.Schema

const adminshema= new Schema({
    firstname : String ,
    email: String , 
    password : String,
    role :{
        type: String,
        default: "admin",
        enum: ["user", "admin", "prof"]
} 
    })
const admins = mongoose.model("admin",adminshema)
module.exports = admins 