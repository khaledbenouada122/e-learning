const express = require("express")
const app = express()
const cors =require("cors")
app.use(cors())
app.use(express.json())
app.use("/uploads",express.static(__dirname + "/uploads"))
const mongoose = require ("mongoose")
const dotenv=require("dotenv").config({path:"./config/.env"})
app.use('/',require("./routes/userRoutes"))
/* pour l'inseration de L'image */
app.use("/img",require("./routes/aploadRouter"))

{ mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("conecter au basa")})
    .catch(e=>{console.log(e)})}
app.listen(process.env.PORT,(err)=>{
    if (err) throw err
    else{
        console.log("mongo DB est connecter en succées sur : ", process.env.PORT)}
    })
