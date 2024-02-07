const admine =require("../models/adminshema")


exports.addadmin = async(req,res)=>{
 try{
 const {firstname,email,password,role} = req.body
 const newpost = await new admine({firstname,email,password,role})
 const post = await newpost.save()
 res.status(200).json({post})
}catch{
    res.status(500).json({msg:`somthing was wrong :${Error}`})
}
}