const admin = require("../models/userAuth")


exports.getetudiant= async(req,res)=>{
    try{
        admin.find()
        .then((data)=>{res.send(data)})

    }catch(error){
        res.status(500).json({msg:"somthing was wrong"})

    }
    


}