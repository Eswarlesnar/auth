import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../contexts/authContext";


const cookies = new Cookies();


const ProtectedRoute = ({ children , location })  => {
    const token = cookies.get("TOKEN");
    const { setLoggedIn} =  useContext(authContext)
    if(token){
        return children
    }else{
        setLoggedIn(false)
        return  <Navigate to = "/login" replace/>
    }
}


export default ProtectedRoute


