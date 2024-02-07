const putfrancais=require("../models/francaischema")


exports.putfrancais = async(req,res)=>{
    try{
    let putID= req.params.id
       putfrancais.findByIdAndUpdate(putID,{...req.body})
       .then((putfrancais)=>{
        if(!putfrancais){
            return res.status(404).send({msg:"error updating"})}
                res.send({msg:"upadate sucess"})})


}catch(error){
    res.status(500).send({msg:`somthing wont worong : ${error}`})

}
}