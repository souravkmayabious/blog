import React , {useEffect,useState} from "react";
import { Link } from "react-router";
import { toast } from 'react-toastify';

import "./navbar.css";

export default function Navbar() {
  
  const [theme , setTheme] = useState('light');
    
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);

    // Toggle theme
    const toggleTheme = (selectedTheme) => {
      setTheme(selectedTheme);
      localStorage.setItem('theme', selectedTheme); // Save the selected theme in localStorage
      toast('Seleted Theme : '+selectedTheme);
    };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sdsfdf">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-cloud-sun"></i>
                </Link>
                <ul className="dropdown-menu text-center">
                  <li>
                    <Link className="dropdown-item" href="#"  onClick={() => toggleTheme('light')}>
                      <i className="fa-solid fa-sun"></i> Day
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#"  onClick={() => toggleTheme('dark')}>
                      <i className="fa-solid fa-moon"></i> Night
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <Link className="nav-link mx-2" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
