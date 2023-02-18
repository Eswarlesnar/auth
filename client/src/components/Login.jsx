import { Button, InputLabel, Typography  } from '@mui/material';
import {useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import { StyledBox , StyledContainer , StyledInput } from '../assets/muithemes';


const Login = () => {
    const [isSubmitted , setIsSubmitted] = useState(false)
    const [errors , setErrors] = useState("")
    const [loginSuccessfull , setLoginSuccessful] = useState(false)
    const [email , setEmail] = useState("")
    const [password ,  setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setErrors("")
        if(email){
            let validEmail = (/[\w-]+@([\w-]+\.)+[\w-]+/).test(email)
            if(validEmail === false){
                setErrors("Email is not valid")
            }
        }
        if(password.length < 5) {
            setErrors("Password should be more than 4 characters")
        }

        if(errors.length > 1) {
            return
        }else{
            axios.post('http://localhost:8080/login', {
                email : email,
                password :password
              })
              .then(function (response) {
                console.log(response);
                // navigate("/login")
                setLoginSuccessful(true)
                setTimeout( () => {
                    navigate("/")
                },1500)
              })
              .catch(function (error) {
                 setErrors(error.response.data.message)
              });
        }
    }
    


    const navigate = useNavigate()
    return <>
        <StyledContainer >
                <>
                        {
                          loginSuccessfull ?   <Typography>!!!Logged in  Successfullly</Typography> : 
                          <StyledBox>
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
                                    (isSubmitted === true && errors.length > 1 ) && <Typography variant = "p" sx ={{color : "red"}}>{errors}</Typography>
                                        
                                    
                                }
                                <div>
                                    <Button variant ="contained" type ="submit">Login</Button> 
                                    <span onClick = {e => navigate("/register")}><Typography>Register</Typography></span>
                                </div>
                            </form>
                        </StyledBox>
                        }
                 </>
        </StyledContainer>

    </>
}

export default Login
