// src/components/Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import './Slideshow.css'; // Custom styles for the slideshow

// Array of slide texts
const slides = [
  { text: 'Welcome to our Website', description: 'Explore our features and services.' },
  { text: 'About Us', description: 'We are committed to delivering quality.' },
  { text: 'Contact Us', description: 'Reach out for more information.' },
];

// Slideshow component
const Slideshow = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <h2>{slide.text}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <button className="next" onClick={onClick}>
      &gt;
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button className="prev" onClick={onClick}>
      &lt;
    </button>
  );
};

export default Slideshow;
