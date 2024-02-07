const adminputs = require("../models/adminshema")


exports.adminput = async(req,res)=>{
    try{
        let userID = req.params.id
        
        adminputs.findByIdAndUpdate(userID,{...req.body})
        let path = req.protocol + "://" + req.hostname + ":" +process.env.PORT + "/uploads/"
        let upImage = new Image({imageName:path})
            upImage.save()
        .then((adminputs)=>{
            if(!adminputs){
               return res.status(404).send({msg:"not found"})}
                      res.send({msg:"updatedd"})})


    }catch(error){
        res.status(500).json({msg:"somthig want wrong"})
    }
}