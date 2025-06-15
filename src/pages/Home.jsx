import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Silk from './Silk';

const Home = () => {
  const navigate = useNavigate();  return (
    <div className="home-container" style={{ backgroundColor: '#222831' }}>
      {/* Silk Background for entire page */}
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      <Navbar 
        bgColor="rgba(123, 116, 129, 0.1)" 
        textColor="#DFD0B8" 
        transparent={true}
        position="relative"
      />

      {/* Hero Section */}
      <section className="hero" style={{ backgroundColor: 'transparent' }}>        
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