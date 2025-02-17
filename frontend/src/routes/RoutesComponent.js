import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Loader from '../components/Loader';
import App from '../App';
import Navbar from '../components/Navbar';
import NotFound from '../pages/NotFound';

const RoutesComponent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const hideNavbarPaths = ["/","/about", "/contact", "/login"]; // Example paths

  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  useEffect(() => {
    if(location.pathname == "/"){
      setLoading(false);
    }else{
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer); // Clean up the timer
    }
    
  }, [location]); // Re-run on path change

  return (
    <>
      {!hideNavbar && <Navbar />} 
      {loading && <Loader />} 

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
