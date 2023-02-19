import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";


const cookies = new Cookies();

const ProtectedRoute = ({ children , location })  => {
    const token = cookies.get("TOKEN");
    if(token){
        return children
    }else{
        return  <Navigate to = "/login" replace/>
    }
}


export default ProtectedRoute


