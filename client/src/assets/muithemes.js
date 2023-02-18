// import { Button, InputLabel, Typography  } from '@mui/material';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

export const StyledBox =  styled(Box)(( {theme}) => ( {
    height : 600,
    width : 600,
    border : "1px solid black",
    background : "#F0FFFF",
    fontSize : "1.3rem",
    display : "flex" , 
    flexDirection : "column",
    gap :"3rem",
    justifyContent : "center",
    alignItems : "center"
    
}))

export const StyledContainer = styled(Container)(({theme}) => ({
    width : "100%", 
    height : "100vh",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
}))


export const StyledInput = styled(Input)(({theme}) => ({
    width : 300,
    height :40,
    padding :"0.5rem",
    marginBottom : "15px"
}))
