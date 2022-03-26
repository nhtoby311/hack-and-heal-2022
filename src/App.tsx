import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import HomeDoctor from './pages/Doctor/Home'
import Login from './pages/Login';
import './styles/style.css'
import Layout from './components/Layout';
import Test from './pages/Doctor/Test';
import { AnimatePresence } from 'framer-motion';
import List from './pages/Doctor/List';

function App() {
  const { auth,authDoctor } = useContext(AuthContext);
  const location = useLocation()

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
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>}/>
          <Route path="login" element={<Login></Login>}/>
          <Route path="/doctor" >
            <Route index element={  
              <ProtectedDoctorRoute>
                <HomeDoctor />
              </ProtectedDoctorRoute>}/>
            <Route path="test" element={<Test />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Layout>
    
  );
}

export default App;
