const getimage=require("../models/image")

exports.getimage = async(req,res)=>{
    try{
        getimage.find()
        .then((data)=>{res.send(data)})
    }catch(error){
        res.status(500).json({msg:"somthing was wrong"})

    }
}