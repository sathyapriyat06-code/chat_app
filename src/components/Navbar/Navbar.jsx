import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg sticky-top main-navbar glass-panel">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="logo-icon-container">
            <FiSend className="logo-icon" />
          </div>
          <span className="logo-text">Sync<span className="logo-highlight">Wave</span></span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#review">Review</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-3 nav-actions">
            <ThemeToggle />
            <button
              onClick={() => navigate('/login')}
              className="btn btn-indigo d-flex align-items-center gap-1 btn-nav-cta"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
