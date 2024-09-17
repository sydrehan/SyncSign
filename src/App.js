import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Tempnav';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Landing from './components/Landing';
import './App.css';  // Optional, if you want global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          
          <Route path="/" element={
            <>
              <Home />
              <Slideshow />
              
            </>
          } />
          
          {/* Route for the Landing Page */}
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
