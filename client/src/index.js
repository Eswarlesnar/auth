import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <Routes>
          <Route path = "/" element = { <App /> } />
          <Route path = "/login" element = { <Login /> } />
          <Route path ="/register" element = { <Register /> }  />
          <Route path = "/dashboard" element = { 
             <ProtectedRoute>
                <Dashboard />
             </ProtectedRoute>} 
          />
       </Routes>
    </Router>
  </React.StrictMode>
);
