import { createContext , useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";


export const authContext = createContext()

const AuthContextProvider =({children}) =>{
    const [loggedIn , setLoggedIn ] = useState(false)
    const cookies = new Cookies()
    const navigate = useNavigate()
    const handleLogout = () => {
        cookies.remove("TOKEN" , { path : "/"})
        setLoggedIn(false)
        navigate("/")
    }
    useEffect( () => {
        const token = cookies.get("TOKEN")
        if(token){
            setLoggedIn(true)
        }
    }, [])
    return <authContext.Provider value = {{loggedIn , setLoggedIn , handleLogout}}>{children}</authContext.Provider>
}


export default AuthContextProvider