// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar 
        bgColor="#1F2933" 
        textColor="#DFD0B8" 
        transparent={false}
        position="fixed"
      />
      <div className="dashboard-container" style={{ paddingTop: '80px' }}>
        {/* Top Navigation Bar */}
        <nav className="top-nav-bar">
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          ☰ {/* Hamburger icon */}
        </button>
        <h1 className="dashboard-heading">My Dashboard</h1>
        {/* Home Button */}
        <a href="/" className="home-button">Home</a> {/* Added Home button */}
      </nav>

      <div className="main-content-wrapper">
        {/* Collapsible Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h2>Categories</h2>
            <button className="sidebar-close-button" onClick={toggleSidebar}>
              &times; {/* Close icon */}
            </button>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li><a href="#productivity" onClick={toggleSidebar}>🚀 Productivity & Organization</a></li>
              <li><a href="#finance" onClick={toggleSidebar}>💰 Finance & Money Management</a></li>
              <li><a href="#career" onClick={toggleSidebar}>📈 Career & Professional Growth</a></li>
              <li><a href="#health" onClick={toggleSidebar}>🏋️ Health & Wellness</a></li>
              <li><a href="#home" onClick={toggleSidebar}>🏠 Home & Life Skills</a></li>
              <li><a href="#travel" onClick={toggleSidebar}>✈️ Travel & Transportation</a></li>
            </ul>
          </nav>
        </aside>

        <div className={`dashboard-main ${isSidebarOpen ? 'shifted' : ''}`}>
          {/* Productivity & Organization */}
          <div className="category productivity" id="productivity">
            <h2>🚀 Productivity & Organization</h2>
            <div className="subcategories">
              <div className="card">
                <a href="/task">Task Tamer</a>
              </div>
              <div className="card">
                <a href="/streaks">Streaks Savvy</a>
              </div>
              <div className="card">
                <a href="/timewiz">Time Wizardry</a>
              </div>
              <div className="card">
                <a href="/dream">Dream Sync</a>
              </div>
            </div>
          </div>

          {/* Finance & Money Management */}
          <div className="category finance" id="finance">
            <h2>💰 Finance & Money Management</h2>
            <div className="subcategories">
              <div className="card">
                <a href="/mojo">Money Mojo</a>
              </div>
              <div className="card">
                <a href="/cash">Cash Compass</a>
              </div>
              <div className="card">
                <a href="/duedate">Due Date Defender</a>
              </div>
            </div>
          </div>

          {/* Career & Professional Growth */}
          <div className="category career" id="career">
            <h2>📈 Career & Professional Growth</h2>
            <div className="subcategories">
              <div className="card">
                <a href="/resu">ResuMagic</a>
              </div>
              <div className="card">
                <a href="/aceit">Ace the Space</a>
              </div>
              <div className="card">
                <a href="/acawhite">Academia Whiteboard</a>
              </div>
              <div className="card">
                <a href="/pause">Pause and Play</a>
              </div>
            </div>
          </div>

          {/* Health & Wellness */}
          <div className="category health" id="health">
            <h2>🏋️ Health & Wellness</h2>
            <div className="subcategories">
              <div className="card">
                <a href="/snack">Snack Smarts</a>
              </div>
              <div className="card">
                <a href="/fit">Fit in a Flash</a>
              </div>
              <div className="card">
                <a href="/mindspa">Mind Spa</a>
              </div>
            </div>
          </div>

          {/* Home & Life Skills */}
          <div className="category home" id="home">
            <h2>🏠 Home & Life Skills</h2>
            <div className="subcategories">
              <div className="card">
                <a href="/zenden">Zen Den</a>
              </div>
              <div className="card">
                <a href="/fixit">Fix-It Fast</a>
              </div>
              <div className="card">
                <a href="/laundry">Laundry Lab</a>
              </div>
              <div className="card">
                <a href="/survival">Survival Mode</a>
              </div>
            </div>
          </div>

          {/* Travel & Transportation */}
          <div className="category travel" id="travel">
            <h2>✈️ Travel & Transportation</h2>
            <div className="subcategories">
              <div className="card">
                <a href="/packpro">Pack Like a Pro</a>
              </div>
              <div className="card">
                <a href="/wanderwise">Wander Wise</a>
              </div>
              <div className="card">
                <a href="/commute">Commute Companion</a>
              </div>
              <div className="card">
                <a href="/safetravels">Safe Travels HQ</a>
              </div>
            </div>
          </div>        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;