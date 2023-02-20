import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Route , Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import TaskContextProvider from './contexts/taskContext';
import AuthContextProvider from './contexts/authContext';
import Navbar from './components/Navbar';

const FramerRouter = ({children}) => {
   const location = useLocation()
   return <Routes location = {location} key = {location.pathname}>
        {children}
   </Routes>

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <AnimatePresence  mode = "wait">
          <Navbar />
          <FramerRouter >
              <Route path = "/" element = { <App /> } />
              <Route path = "/login" element = { <Login /> } />
              <Route path ="/register" element = { <Register /> }  />
              <Route path = "/dashboard" element = { 
                <ProtectedRoute>
                  <TaskContextProvider>
                      <Dashboard />
                  </TaskContextProvider>
                </ProtectedRoute>} 
              />
          </FramerRouter>
        </AnimatePresence>
       </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
