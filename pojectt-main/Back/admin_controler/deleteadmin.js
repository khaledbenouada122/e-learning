
/* ne pas fonctionelle */
const admins=require("../models/adminshema")



exports.deleteadmin= async(res,req)=>{
    try{admins.findByIdAndDelete(req.params.id)
.then((admins)=>{
    if (!admins){
       res.status(404).json({msg:'user not defined'})}
    else { res.status(200).json({msg:"user deleted sucesseflly"})}})
}catch(err){res.status(500).send(err)}
}
