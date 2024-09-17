// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Tempnav';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Landing from './components/Landing';
import Footer from './components/Footer'; // Import Footer
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<><Home /><Slideshow /></>} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </div>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
