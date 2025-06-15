import React, { useState } from 'react';
import { User, Mail, Lock, Calendar, Briefcase, Github } from 'lucide-react';
import './SignUp.css';
import TulipLogo from '../assets/tulip.svg';
import Navbar from '../components/Navbar';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    usageType: 'personal'
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
    // Add form validation and submission logic here
  };

  const handleSocialSignup = (provider) => {
    console.log(`Sign up with ${provider}`);
  };
  return (
    <>
      <Navbar 
        bgColor="#222831" 
        textColor="#DFD0B8" 
        transparent={false}
        position="fixed"
      />
      <div className="signup-container" style={{ paddingTop: '80px' }}>
        <div className="signup-card">
        {/* Left Section: Logo and Welcome Text */}
        <div className="signup-card-left">
          <div className="logo-header">
            <img src={TulipLogo} alt="Tulip Logo" className="logo" />
            <h1 className="welcome-title">Create Your Account</h1>
            <p className="welcome-subtitle">Join the Tulip community</p>
          </div>
        </div>

        {/* Right Section: Sign Up Form and Social Login */}
        <div className="signup-card-right">
          {/* Sign Up Form */}
          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="input-group">
              <User className="input-icon" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="form-input"
                required
              />
            </div>

            {/* Age */}
            <div className="input-group">
              <Calendar className="input-icon" />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                min="13"
                max="120"
                className="form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="form-input"
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Lock className="toggle-icon" /> : <Lock className="toggle-icon" />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="form-input"
                required
              />
            </div>

            {/* Usage Type */}
            <div className="usage-type-group">
              <p className="usage-type-label">I'm signing up for:</p>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="usageType"
                    value="personal"
                    checked={formData.usageType === 'personal'}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <span className="radio-custom"></span>
                  <Briefcase className="radio-icon" />
                  <span className="radio-label">Professional</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="usageType"
                    value="professional"
                    checked={formData.usageType === 'professional'}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <span className="radio-custom"></span>
                  <User className="radio-icon" />
                  <span className="radio-label">Personal</span>
                </label>
              </div>
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">or</span>
            <span className="divider-line"></span>
          </div>

          {/* Social Sign Up */}
          <div className="social-signup">
            <button
              type="button"
              className="social-button"
              onClick={() => handleSocialSignup('Google')}
            >
              <GoogleIcon />
            </button>
            <button
              type="button"
              className="social-button"
              onClick={() => handleSocialSignup('Apple')}
            >
              <AppleIcon />
            </button>
            <button
              type="button"
              className="social-button"
              onClick={() => handleSocialSignup('GitHub')}
            >
              <Github className="social-icon" />
            </button>
          </div>

          {/* Login Link */}
          <div className="login-link">
            Already have an account? <a href="/login" className="login-link-text">Log In</a>
          </div>        </div>
      </div>
    </div>
    </>
  );
}
