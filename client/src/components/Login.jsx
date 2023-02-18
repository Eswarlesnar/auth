import { Button, InputLabel, Typography  } from '@mui/material';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';


//styled component way of stylling with mui components


const StyledBox =  styled(Box)(( {theme}) => ( {
    height : 600,
    width : 600,
    border : "1px solid black",
    background : "#F0FFFF",
    fontSize : "1.3rem",
    display : "flex" , 
    flexDirection : "column",
    gap :"1rem",
    justifyContent : "center",
    alignItems : "center"
    
}))

const StyledContainer = styled(Container)(({theme}) => ({
    width : "100%", 
    height : "100vh",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
}))


const StyledInput = styled(Input)(({theme}) => ({
    width : 300,
    height :40,
    padding :"0.5rem",
}))




const Login = () => {
    return <>
        <StyledContainer >
                <StyledBox >
                        <Typography variant='h4'>Login</Typography>
                        <InputLabel htmlFor ="email">
                            Email:
                        </InputLabel>
                        <StyledInput id="email" type='text' placeholder='Enter Email'  />
                        <InputLabel htmlFor ="password" sx ={{ alignSelf : ""}}>
                            Password:
                        </InputLabel>
                        <StyledInput id="password" type = "password" placeholder = "password"/>
                        <div>
                            <Button variant ="contained">Login</Button> 
                            <span><Typography>Not a user? Register here</Typography></span>
                        </div>
                 </StyledBox>
        </StyledContainer>

    </>
}

export default Login
