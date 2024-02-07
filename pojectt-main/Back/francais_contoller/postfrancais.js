const postfrancais = require("../models/francaischema")

exports.postfrancais = async(req,res)=>{
    try{
    const {chapitre,titre} =req.body
    const newpost = new postfrancais({chapitre,titre})
    const post = await newpost.save()
    res.status(200).json({post})
}catch{
    res.status(500).json({msg:`somthing was wrong :${Error}`})
}
}