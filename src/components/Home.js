// src/components/Home.js
import React from 'react';
import './Home.css';
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <div className='homepage-para'>
      <h2>SIGN LANGUAGE</h2>
      <p>Welcome to the Home Page. This is the main landing page of the website.</p>
      <Slideshow />
    </div>
  );
};

export default Home;
