
import { Typography } from '@mui/material';
import './App.css';
import {  StyledContainer, StyledPaperForm } from './assets/muithemes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <StyledContainer>
      <StyledPaperForm elevation = {3}>
        <Typography variant ="h3">Welcome </Typography>
        <Typography variant= "body2">This page is available for everyone</Typography>
        <Typography variant= "body2">But the dashboard page is protected and only authenticated  users can access it</Typography>
        <Typography><Link to = "/dashboard">Go to Dashbooard </Link> if you are not logged in you will be redirect to login page</Typography>
        <div style = {{display : "flex" , justifyContent : "space-around" , width :   "80%"}}>
           <Link to = "/login">Login</Link>
           <Link to = "/register">Register</Link>
        </div>
      </StyledPaperForm>
    </StyledContainer>
  );
}

export default App;
