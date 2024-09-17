// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/signup" className="nav-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
