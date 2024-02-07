const mongoose= require ('mongoose')
const Schema = mongoose.Schema

const Imageschema= new Schema({
    imageName: String ,
   created_at: {
    type :Date,
    default: Date.now,
   }

   
    })
const admin = mongoose.model("upload",Imageschema)
module.exports = admin 