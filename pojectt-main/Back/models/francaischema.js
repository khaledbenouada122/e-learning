const mongoose= require ('mongoose')
const Schema = mongoose.Schema

const francaischema= new Schema({
   chapitre: String ,
   titre : String,
   created_at: {
    type :Date,
    default: Date.now,}

   
    })
const admin = mongoose.model("francai", francaischema)
module.exports = admin 