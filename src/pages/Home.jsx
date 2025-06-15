import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container" style={{ backgroundColor: '#222831' }}>
      <Navbar 
        bgColor="#222831" 
        textColor="#DFD0B8" 
        transparent={false}
        position="relative"
      />

      {/* Hero Section */}
      <section className="hero" style={{ backgroundColor: '#222831' }}>
        {/* Interactive Background */}
        <div className="interactive-bg">
          <svg className="wavy-bg" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path
              d="M0,100 C150,200 350,0 500,100 C650,200 750,300 900,200 C1050,100 1200,300 1200,400 L1200,800 L0,800 Z"
              stroke="#393E46"
            />
            <path
              d="M0,300 C150,400 350,200 500,300 C650,400 750,500 900,400 C1050,300 1200,500 1200,600 L1200,800 L0,800 Z"
              stroke="#393E46"
            />
          </svg>
        </div>
        
        <div className="hero-content">
          <h1 style={{ color: '#DFD0B8' }}>Welcome to Tulip</h1>
          <p style={{ color: '#DFD0B8' }}>
            Tulip — your all-in-one app for everything life throws your way! From to-do lists and habit tracking to sleep, finance, career, travel, and more.
          </p>
          <div className="hero-buttons">
            <Button 
              type="primary" 
              text="Learn More" 
              bgColor="#DFD0B8"
              textColor="#222831"
            />
            <Button 
              type="secondary" 
              text="Try Demo" 
              borderColor="#DFD0B8"
              textColor="#DFD0B8"
              onClick={() => navigate('/demo')}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;