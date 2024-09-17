// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';



const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li>
          <Link to="/">
            <img src={logo} alt="Logo" className="nav-logo" />
          </Link>
        </li>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
