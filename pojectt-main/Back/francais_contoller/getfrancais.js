const getfrancais=require("../models/francaischema")

exports.getfrancais=async(req,res)=>{
    try{
            getfrancais.find()
            .then((data)=>{res.send(data)})

    }catch(error){
        res.status(500).json({msg:"somthing was wrong"})
    }



}