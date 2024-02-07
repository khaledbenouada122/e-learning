const putimage = require("../models/image")

exports.putimage = async(req,res)=>{
    try{
    let userID= req.params.id
      putimage.findByIdAndUpdate(userID,{...req.body})
      .then((putimage)=>{
        if (!putimage)res.send(404).send({msh:"phot not found"})
        res.send({msg:"sucess operation"})
        console.log(putimage)
      })
    }catch(err){
        res.status(500).json({msg:`somthing wont wrong: ${err}`})
    }
}
