import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/tulip.svg';
import './Navbar.css';

const Navbar = ({ 
  bgColor = '#222831', 
  textColor = '#DFD0B8', 
  transparent = false,
  position = 'relative'
}) => {
  const navigate = useNavigate();

  const navbarStyle = {
    backgroundColor: transparent ? 'transparent' : bgColor,
    position: position,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  };

  const linkStyle = {
    color: textColor
  };

  const buttonStyle = {
    color: textColor,
    borderColor: textColor
  };

  const getStartedStyle = {
    backgroundColor: textColor,
    color: bgColor
  };

  return (
    <nav className="tulip-navbar" style={navbarStyle}>
      <div className="tulip-navbar-content">
        <div className="tulip-logo">
          <img src={icon} alt="Tulip Icon" className="tulip-logo-icon" />
          <span className="tulip-logo-text" style={linkStyle}>Tulip</span>
        </div>
        <div className="tulip-nav-links">
          <a href="/" style={linkStyle} className="tulip-nav-link">Home</a>
          <a href="#" style={linkStyle} className="tulip-nav-link">About</a>
          <a href="/Dashboard" style={linkStyle} className="tulip-nav-link">Dashboard</a>
          <a href="#" style={linkStyle} className="tulip-nav-link">Demo</a>
        </div>
        <div className="tulip-nav-actions">
          <button 
            className="tulip-btn tulip-btn-login"
            style={buttonStyle}
            onClick={() => navigate('/Login')}
          >
            Login
          </button>
          <button 
            className="tulip-btn tulip-btn-signup"
            style={getStartedStyle}
            onClick={() => navigate('/SignUp')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
