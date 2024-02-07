const admin = require("../models/userAuth")


exports.updatetudiant=async(req,res)=>{
    try{
        let userID = req.params.id
        admin.findByIdAndUpdate(userID,{...req.body})
        .then((admin)=>{
            if(!admin){
               return res.status(404).send({msg:"not found"})}
                      res.send({msg:"updatedd"})})}
    catch(error){
        res.status(500).json({msg:"somthing was wrong"})
    }
}