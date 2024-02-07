const mongoose= require ('mongoose')
const Schema = mongoose.Schema

const userAuthschema= new Schema({
    firstname : String ,
   email: String , 
   password : String,
    role :{
        type: String,
        default: "user",
        // enum: ["user", "admin", "prof"] 
} 
    })
const admin = mongoose.model("userAuth",userAuthschema)
module.exports = admin 