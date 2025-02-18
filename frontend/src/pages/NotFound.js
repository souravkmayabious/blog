import React from 'react';
import "./notFound.css";

const NotFound = () => {
  return (
    <div className='container-fluid not-found-wrap'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <i className="fa-solid fa-ban text-center  fa-beat text-danger fa-2x"></i>
    </div>
  );
};

export default NotFound;
