import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import AuthRoute from './hooks/useAuthRoute';
import Home from './pages/Home';
import HomeDoctor from './pages/Doctor/Home'
import Login from './pages/Login';
import './styles/style.css'

function App() {
  const { auth,authDoctor } = useContext(AuthContext);

  const getData = async() =>{
    try
      {
        const response = await fetch('http://129.159.250.94/api/auth/login',{
          method:'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify(
            {
              email:"duysp1994@gmail.com",
              password:"12345678"
            }
          )
      })
        const res = await response.json()
        console.log(res)
    }
    catch(err){
      console.log(err)
    }
  }

  const ProtectedRoute = ({ children }:any) => {
    if (!auth) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

  const ProtectedDoctorRoute = ({ children }:any) => {
    if (!authDoctor) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };


  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/ss" element={<>Testing</>}/>
      <Route path="/doctor" element={<ProtectedDoctorRoute>
              <HomeDoctor />
            </ProtectedDoctorRoute>}/>
    </Routes>
  );
}

export default App;
