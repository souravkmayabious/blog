import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/home');
    }, 2000);
  })

  return (
    <div className="container-fluid apploading">
       <i className="fa fa-spinner fa-spin"></i> Loading...
    </div>
  );
}

export default App;
