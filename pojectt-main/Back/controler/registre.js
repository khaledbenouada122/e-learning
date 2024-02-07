const bcrypt = require("bcryptjs")
const userAuth = require("../models/userAuth")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config({path:"../config/.env"})
console.log(process.env.secretkey)
/*searching of the account exist or not */
  exports.registre = async(req,res)=>{
    try{
        const {firstname,email,password} = req.body
        const existuser= await userAuth.findOne({email:email})
        if(existuser) 
              return res.status(404).json({msg:"you have an account Please Try To Sign in "})
        /* cryptage password*/
        
        const cryptpassword= await bcrypt.hash(password,12)
        console.log(cryptpassword)
        const newuser = new userAuth({firstname,email,password:cryptpassword})
        
        const user = await newuser.save()
    
              
        /*creation de token*/
        const token=jwt.sign({email,id:userAuth._id},process.env.secretkey,)
            res.status(200).json({user,token})
            console.log(user , token)
    }catch(error){
       res.status(500).json({error:[{msg:error.message}]})
  }
}
