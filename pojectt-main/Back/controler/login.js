const userAuth = require("../models/userAuth")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.login = async(req,res)=>{
    try{
        /*  test de l'existance de l'email*/
        const{email,password}=req.body
        const existuser = await userAuth.findOne({email:email})
        if (!existuser) res.status(400).json({msg:"try to do an account"})
        /* comparaison mot de passe celui de bae d e donnée */
        const validpawword=await bcrypt.compare(password,existuser.password) 
        if (!validpawword) res.status(400).json({msg:"wrong password"})
        /* test de token */
        const token=jwt.sign({email,id:userAuth._id},process.env.secretkey,)
        res.status(200).json({existuser,token})
    }catch(error){
        res.status(500).json({msg:`somthing was not runing${error}`})

    }
}

