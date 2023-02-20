import { Button, InputLabel, Typography  } from '@mui/material';
import axios from "axios"
import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import {  StyledContainer , StyledInput, StyledPaperForm } from '../assets/muithemes';

const Register = () => {
    const [isSubmitted , setIsSubmitted] = useState(false)
    const [errors , setErrors] = useState("")
    const [registeredSuccessfully , setRegisteredSuccessfully] = useState(false)
    const initialState = {
        username : "" ,
        email : "" , 
        password : "" , 
        confirmPassword : ""
    }
    const [formData ,setFormData] = useState(initialState)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setErrors("")
        setIsSubmitted(false)
        setFormData(prev => ({
            ...prev , 
            [e.target.name] : e.target.value
        }))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setErrors("")
        if(formData.username.trim().length < 4) {
            setErrors("User namae should be more than 3 characters")
            return
        }
        if(formData.email.trim()){
            let validEmail = (/[\w-]+@([\w-]+\.)+[\w-]+/).test(formData.email)
            if(validEmail === false){
                setErrors("Email is not valid")
                return
            }
        }
        if(formData.password.trim().length < 5) {
            setErrors("Password should be more than 4 characters")
            return
        }
        if(formData.password !== formData.confirmPassword){
            setErrors("passwords do not Match")
            return
        }


       
        console.log(formData)
        axios.post('http://localhost:8080/register', {
            username:formData.username.trim(),
            email : formData.email.trim(),
            password : formData.password.trim()
        })
        .then(function (response) {
            console.log(response);
            // navigate("/login")
            setRegisteredSuccessfully(true)
            setTimeout( () => {
                navigate("/login")
            },1500)
        })
        .catch(function (error) {
            setErrors(error.response.data.message)
        });
    

    }
    
    return( 
    <>
        <StyledContainer >
                <>
                        {
                        registeredSuccessfully ?  <Typography>!!!Registered Successfullly</Typography>: 
                        <StyledPaperForm elevation = {3}> 
                            <Typography variant='h4'>Register</Typography>
                            <form onSubmit = {handleRegister}>
                                <InputLabel htmlFor ="username">
                                    Username:
                                </InputLabel>
                                <StyledInput 
                                id="username" 
                                name ="username" 
                                type='text' 
                                value = {formData.username}
                                placeholder='Enter Username' 
                                onChange = {e => handleChange(e)}
                                />
                                <InputLabel htmlFor ="email">
                                    Email:
                                </InputLabel>
                                <StyledInput 
                                id="email" 
                                name = "email" 
                                value = {formData.email}
                                type='text' 
                                placeholder='Enter Email'  
                                onChange = {e => handleChange(e)} 
                                />
                                <InputLabel htmlFor ="password" sx ={{ alignSelf : ""}}>
                                    Password:
                                </InputLabel>
                                <StyledInput 
                                id="password" 
                                name ="password" 
                                value  ={formData.password}
                                type = "password" 
                                placeholder = "password"  
                                onChange = {e => handleChange(e)}
                                />
                                <InputLabel htmlFor ="confirmpassword" sx ={{ alignSelf : ""}}>
                                    Confirm Password:
                                </InputLabel>
                                <StyledInput 
                                id="confirmPassword" 
                                name = "confirmPassword" 
                                value = {formData.confirmPassword}
                                type = "password" 
                                placeholder = "Confirm Password"  
                                onChange = {e => handleChange(e)}
                                />
                                {
                                    (isSubmitted === true && errors.length > 1 ) && 
                                    <Typography sx ={{color : "red" , fontSize : "0.9rem"}} variant = "body2" >{errors}</Typography>
                                        
                                    
                                }
                                
                                <div>
                                    <Button variant ="contained" type = "submit">Register</Button> 
                                    <Typography>Existing user?<Link to="/login">Login here</Link></Typography>
                                </div>
                            </form>
                        </StyledPaperForm>
                     } 
                 </>
        </StyledContainer>

    </>)
}

export default Register
