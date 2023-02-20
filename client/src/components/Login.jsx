import { Button, InputLabel, Typography , Paper  } from '@mui/material';
import {useNavigate , Link} from "react-router-dom"
import {useContext, useState} from "react"
import axios from "axios"
import Cookies from "universal-cookie";
import { StyledPaperForm , StyledContainer , StyledInput, StyledFormButton } from '../assets/muithemes';
import { authContext } from '../contexts/authContext';


const Login = () => {
    const [isSubmitted , setIsSubmitted] = useState(false)
    const [errors , setErrors] = useState("")
    const [loginSuccessfull , setLoginSuccessful] = useState(false)
    const [email , setEmail] = useState("")
    const [password ,  setPassword] = useState("")
    const {loggedIn , setLoggedIn , handleLogout }  =  useContext(authContext)
    const navigate = useNavigate()
    const cookies = new Cookies();
    
    const handleLogin = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setErrors("")
        if(email.trim().length ===  0){
            setErrors("Enter Email")
            return
        }else{
            let validEmail = (/[\w-]+@([\w-]+\.)+[\w-]+/).test(email)
            if(validEmail === false){
                setErrors("Email is not valid")
                return
            }
        }
        if(password.trim().length < 5) {
            setErrors("Password should be more than 4 characters")
            return
        }
            
        axios.post('http://localhost:8080/login', {
                email : email.trim(),
                password :password.trim()
        })
        .then(function (response) {
            console.log(response);
                // navigate("/login")
            console.log(response)
            cookies.set("TOKEN", response.data.token, {
                    path: "/",
            });
          
            setLoginSuccessful(true)
            setLoggedIn(true)
            navigate("/")
        })
        .catch(function (error) {
            setErrors(error.response.data.message)
        });
        
    }
   


    
    return <> 
        {
        loggedIn  ? 
        <StyledContainer>
            <StyledFormButton  variant = "contained" onClick = {() => handleLogout()}>Log out</StyledFormButton>
        </StyledContainer> :
        
        <StyledContainer component = {Paper} >
                <>
                        {
                          loginSuccessfull ?   <Typography>!!!Logged in  Successfullly</Typography> : 

                          <StyledPaperForm elevation = {3}>
                            <Typography variant='h4'>Login</Typography>
                            <form onSubmit = {handleLogin}>
                                <InputLabel htmlFor ="email">
                                    Email:
                                </InputLabel>
                                <StyledInput 
                                 id="email" 
                                 type='text' 
                                 value = {email}
                                 onChange = {e => {
                                    setErrors("")
                                    setEmail(e.target.value)}}
                                 placeholder='Enter Email'  />
                                <InputLabel htmlFor ="password" sx ={{ alignSelf : ""}}>
                                    Password:
                                </InputLabel>
                                <StyledInput 
                                 id="password" 
                                 type = "password" 
                                 placeholder = "password"
                                 value = {password}
                                 onChange = {e => {
                                    setErrors("")
                                    setPassword(e.target.value)}}
                                />
                                {
                                    (isSubmitted === true && errors.length > 1 ) && 
                                    <Typography sx ={{color : "red" , fontSize : "0.9rem"}} variant = "body2">{errors}</Typography>
                                        
                                    
                                }
                                <div>
                                    <Button variant ="contained" type ="submit">Login</Button> 
                                    <Typography>Not a user? <Link to ="/register">Register here</Link></Typography>
                                </div>
                            </form>
                        </StyledPaperForm>
                        }
                 </>
        </StyledContainer>
      }
    </>
}

export default Login
