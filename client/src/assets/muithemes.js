// import { Button, InputLabel, Typography  } from '@mui/material';
import Input from '@mui/material/Input';

import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const StyledPaperForm =  styled(Paper)(( {theme}) => ( {
    height : 600,
    width : 400,
    padding :"10px 30px",
    border : "1px solid #F0FFFF",
    background : "white",
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
    alignItems : "center",
    background : "#e0ffff"
}))


export const StyledInput = styled(Input)(({theme}) => ({
    width : 300,
    height :40,
    padding :"0.5rem",
    marginBottom : "15px",
    "@media (max-width: 500px)": {
        width : "150px"
      }
}))


export const StyledFormButton = styled(Button)(({theme}) => ({
    width : "305", 
    height : "30",
    padding : "0.5rem",
    marginTop : "10px",
    "@media (max-width: 500px)": {
        width : "150px"
      }
}))


export const StyledPaperFormContainer = styled(Paper)((theme) => ({
    padding: "30px",
    display : "flex" , 
    justifyContent : "center", 
    width : "300px",
    "@media (max-width: 500px)": {
        width : "200px",
        padding : "30px 10px"
      }
    
}))


export const StyledPaperTask = styled(Paper)(({theme}) => ({
    display: "flex",
    width : "700px",
    padding : "10px 20px",
    flexWrap: "wrap", 
    justifyContent : "space-between", 
    gap: "20px" , margin : "3rem",
    "@media (max-width: 500px)": {
        width : "150px",
        padding : "30px 20px",
        justifyContent :"start"
    }
}))
