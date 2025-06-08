import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import icon from '../assets/tulip.svg';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container" style={{ backgroundColor: '#222831' }}>
      {/* Top Navigation Bar */}
      <nav className="navbar" style={{ backgroundColor: '#222831' }}>
        <div className="logo">
          <img src={icon} alt="Tulip Icon" className="logo-icon" />
          <span className="logo-text" style={{ color: '#DFD0B8' }}>Tulip</span>
        </div>
        <div className="nav-links">
          <a href="#" style={{ color: '#DFD0B8' }} className="nav-link">Home</a>
          <a href="#" style={{ color: '#DFD0B8' }} className="nav-link">About</a>
          <a href="#" style={{ color: '#DFD0B8' }} className="nav-link">Features</a>
          <a href="#" style={{ color: '#DFD0B8' }} className="nav-link">Demo</a>
        </div>
        <div className="nav-actions">
          <button 
            className="btn login"
            style={{ color: '#DFD0B8' }}
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="btn get-started"
            style={{ 
              backgroundColor: '#DFD0B8',
              color: '#222831'
            }}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      </nav>

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