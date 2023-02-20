import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import TaskContextProvider from './contexts/taskContext';
import AuthContextProvider from './contexts/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
       <Routes>
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
        </Routes>
       </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
