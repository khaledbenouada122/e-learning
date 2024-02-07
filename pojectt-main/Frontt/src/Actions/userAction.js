import { ADD_USER ,GET_USER} from "./types"
import axios from "axios"


export const addUser =  (newUser) =>(dispatch) =>{
    
 
     axios.post("http://localhost:5680/addUserAuth",newUser)
                
        .then(({data}) => dispatch({
                type:ADD_USER,
                payload:data }))
        .catch((err) => {
            alert(err.response.data.msg)
        });
};
/* 
 export const Login = async () => {
    try {
        const res = await axios.post('http://localhost:6382/auth/login', { id: "id", password: "password" }); // ERROR!
    } catch (err) {
        console.log(err); // Displays "Error: Network error"
    }
*/

export const  getuser = () =>(dispatch) =>{
    axios.get("http://localhost:5680/getuser")
       .then(({data}) => dispatch({
            type:GET_USER,
            payload:data,
        }))
    .catch(err=>{alert("ERROR IN GET USER")})
}



export const deleteuser = (id)=> (dispatch) =>{
    axios
    .delete(`http://localhost:5680/deleteUser/${id}`)
    .then(() => dispatch(getuser()))
    .catch(err=>{alert("ERROR Deleteting")})
}
// export const updateuser=(id,newData)=>(dispatch)=>{
//     console.log("hello");
//     axios
//     .patch(`http://localhost:5000/updateuser/${id}`,newData)
//     .then(()=> dispatch(getuser()))
//     .catch((err)=>{alert("ERROR updating user")})
    
// }
/*PUT - edit a user by ID*/
//PATH: /api/users/updateUser/:userID
export const edditUserById = (id, editUser) => (dispatch) => {
    axios
      .put(`http://localhost:5680/updateUser/${id}`, editUser)
      .then((re) => dispatch(getuser()));
  };