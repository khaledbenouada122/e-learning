import {combineReducers} from "redux";
import userReducer from "./useReducer"
import authReducer from "./authReducer";
export default combineReducers({userReducer,authReducer})