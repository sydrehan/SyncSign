/* eslint-disable no-unused-vars */
// src/components/Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Slideshow.css';  // Ensure this path is correct

// Array of slide data
const slides = [
  {
    text: 'INTRODUCING SIGN SYNC',
    buttonText: 'Get Started',
    buttonLink: '/landing',  // Updated link to navigate to the Landing page route
    description: 'Our Sign Language translation tool bridges the gap between the deaf and hearing communities, enabling seamless communication. With support for multiple languages, we make conversation accessible for everyone.',
  },
  {
    text: 'About Us',
    description: 'We are committed to delivering quality.',
  },
  {
    text: 'Contact Us',
    description: 'Reach out for more information.',
  },
];

// Slideshow component
const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <h2>{slide.text}</h2>
            {index === 0 && (
              <Link to={slide.buttonLink} className="get-started-button">
                {slide.buttonText}
              </Link>
            )}
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button className="next" onClick={onClick}>&gt;</button>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button className="prev" onClick={onClick}>&lt;</button>
);

export default Slideshow;
