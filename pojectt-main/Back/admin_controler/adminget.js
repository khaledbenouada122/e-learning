const getadmin=require("../models/adminshema")

exports.adminget = async(req,res)=>{
    try{
        getadmin.find()
        .then((data)=>{res.send(data)})
    }catch(error){
        res.status(500).json({msg:"somthing was wrong"})
    }
}