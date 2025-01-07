import React, { useState } from 'react';

import bg from "../assets/div.png";
import combinator from "../assets/logo-ycombinator.svg.png";
import arrow from "../assets/arrow-bottom.svg.png";
import coinbase from "../assets/logo-coinbase.svg.png";
import a16z from "../assets/logo-a16z.png.png";
import blockchange from "../assets/logo-blockchange.svg.png";
import infinity from "../assets/svg.png";
import glow from "../assets/image.png";
import casestudy1 from"../assets/casestudy-01.jpg.png";
import casestudy2 from"../assets/casestudy-02.jpg.png";
import casestudy3 from"../assets/casestudy-03.jpg.png";
import casestudy4 from"../assets/casestudy-04.jpg.png";
import other1 from "../assets/other01.jpg.png";
import other3 from"../assets/other03.jpg.png";
import other4 from"../assets/other04.jpg.png";
import div3 from "../assets/div (3).png";
import div4 from "../assets/div (4).png"; 
import help from "../assets/help01.jpg.png";
import div5 from "../assets/div (5).png";
import div6 from "../assets/div (6).png";
import div7 from "../assets/div (7).png";
import about1 from "../assets/about01.jpg.png";
import about2 from "../assets/about02.jpg.png";
import about3 from "../assets/about03.jpg.png";


import "../css/Home.css";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of all projects
  const projects = [
    { id: 1, image: other1, alt: "Project 1" },
    { id: 2, image: other3, alt: "Project 2" },
    { id: 3, image: other4, alt: "Project 3" },
    { id: 4, image: other1, alt: "Project 4" },
    { id: 5, image: other4, alt: "Project 5" },
    { id: 6, image: other3, alt: "Project 6" },
  ];

  const totalSlides = Math.ceil(projects.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="container-1">
        <div className="bg-img">
          <img src={bg} alt="bg" />
        </div>
        <div className="content">
          <h2 className="heading1">Design studio</h2>
          <h2 className="heading2">for the </h2>
          <h2 className="heading3">AI World</h2>
        </div>
        <div className="extra-content">
          <img src={arrow} alt="arrow" />
          <div className="text-container">
            <p className="p1">We help companies design their </p>
            <p className="p2">products to be ready for web3 world</p>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="content">Our clients are backed by:</div>
        <div className="content-logo">
          <img className="combinator " src={combinator} alt="combinator" />
          <img className="coinbase" src={coinbase} alt="coinbase" />
          <img className="a16z" src={a16z} alt="a16z" />
          <img className="blockchange" src={blockchange} alt="blockchange" />
        </div>
      </div>
      <div className="container-3">
        <div className="content-left">
          <h2>what is AI Studio?</h2>
        </div>
        <div className="content-right-wrapper">
          <img className="glow" src={glow} alt="glow effect" />
          <div className="content-right">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
              {/* Background rectangle */}
              {/* <rect width="900" height="400"  /> */}
              
              {/* Infinity symbol with white stroke */}
              <path
                d="M150,200 C150,50 350,50 400,200 C450,350 650,350 650,200 C650,50 450,50 400,200 C350,350 150,350 150,200 Z"
                fill="none"
                stroke="white"
                strokeWidth="3"
              />
              
              {/* Left text inside the left loop */}
              <text
                x="280"
                y="200"
                fill="white"
                fontFamily="Inter, sans-serif"
                fontSize="18"
                textAnchor="middle"
              >
                Passion in the new
                <tspan x="280" y="220">
                  wave of crypto
                </tspan>
              </text>
              
              {/* Right text inside the right loop */}
              <text
                x="520"
                y="200"
                fill="white"
                fontFamily="Inter, sans-serif"
                fontSize="18"
                textAnchor="middle"
              >
                High-quality
                <tspan x="520" y="220">
                  design craft
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="container-4">
        <div className="Title">
            <h2>Projects</h2>
        </div>
        <div className="project-content">
            <div className="project-content-left">
                <img className="casestudy1" src={casestudy1} alt="infinity" />
                <img className="casestudy3" src={casestudy3} alt="infinity" />
                <img className="div3" src={div3} alt="infinity" />

            </div>
            <div className="project-content-right">
                <img className="casestudy2"  src={casestudy2} alt="infinity" />
                <img className="casestudy4" src={casestudy4} alt="infinity" />

            </div>
        </div>
      </div>
      <div className="container-5">
        <div className="Title">
                <h2>Other Projects</h2>
            </div>
            <div className="slider-container">
      <div 
        className="slider-track" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Array(totalSlides).fill().map((_, groupIndex) => (
          <div key={groupIndex} className="slide-group">
            {projects.slice(groupIndex * 3, (groupIndex + 1) * 3).map((project) => (
              <div key={project.id} className="project-item">
                <img src={project.image} alt={project.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="slider-navigation">
        <button className="nav-button prev" onClick={prevSlide}>←</button>
        <div className="pagination-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="nav-button next" onClick={nextSlide}>→</button>
      </div>
    </div>
      </div>
      <div className="container-6">
      
          <img className="div4" src={div4} alt="infinity" />
          <div className="Title">
            <h2>How we can help grow</h2>
          </div>
          <img className="glow1" src={glow} alt="glow effect" />
          <div className='product-content'>
            <div className="product-content-left">
              <h2>Product Clarity</h2>
              <p>UI/UX Design</p>
              <p>Maintain Process</p>
            </div>
            <div className="product-content-right">
              <img className="help" src={help} alt="help" />
              <div className="product-content-right-text">
              <h2>Are you at the idea stage? we will help you identify he critical MVP product scope</h2>
              <p>product goal & vision</p>
              <p>brand price</p>
              <p>product company</p>
              </div>
            </div>

          </div>
      </div>
      <div className="container-7">
          <img className="div5" src={div5} alt="div5" />
          <img className="about1" src={about1} alt=" about1" />
          <img className="about3" src={about3} alt=" about3" />
          <div className="about-content-text">
          <div className="Title">
            <h2>About</h2>
          </div>
            <p> Team of product and brand designers that are really passionate about blockchain technology and good design. We are not just UI freaks! We advocate users for better product experience and common sense.</p>
          <div className="more-about-us">

            <h2>More about us → </h2>
          </div>
          </div>
      </div>
      <div className="container-8">
          <img className='div7' src={div7} alt="div7" />
          <img className="div6" src={div6} alt=" div6" />
          <img className="about2" src={about2} alt=" about2" />
          {/* <img className="about3" src={about3} alt=" about3" /> */}
      </div>
    </div>
  );
};

export default Home;