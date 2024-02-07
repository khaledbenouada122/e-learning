import axios from "axios "
import *  as Types from"./types"
import { useDispatch } from 'react-redux'
const dispatch = useDispatch()
export const registreUser=(data)=>async(dispatch)=>{
    try{
        const res= await axios.post("http://localhost:5680/addUserAuth",data)
        dispatch({
            Types:Types.Register,
            payload:res.data
          })  
          console.log(res.data)

    }catch(error){
        type:Types.Register_fail 
        payload:error.message?error.message :error.response.data.errors

    }

}