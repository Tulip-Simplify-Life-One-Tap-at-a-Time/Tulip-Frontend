// Dashboard.js
import React, { useState, useRef, useEffect } from 'react';
import './Dashboard.css';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const cardRefs = useRef([]);
  
  const categories = [
    {
      id: 'productivity',
      title: '🚀 Productivity & Organization',
      subcategories: [
        { name: 'Task Tamer', href: '/task' },
        { name: 'Streaks Savvy', href: '/streaks' },
        { name: 'Time Wizardry', href: '/timewiz' },
        { name: 'Dream Sync', href: '/dream' }
      ]
    },
    {
      id: 'finance',
      title: '� Finance & Money Management',
      subcategories: [
        { name: 'Money Mojo', href: '/mojo' },
        { name: 'Cash Compass', href: '/cash' },
        { name: 'Due Date Defender', href: '/duedate' }
      ]
    },
    {
      id: 'career',
      title: '📈 Career & Professional Growth',
      subcategories: [
        { name: 'ResuMagic', href: '/resu' },
        { name: 'Ace the Space', href: '/aceit' },
        { name: 'Academia Whiteboard', href: '/acawhite' },
        { name: 'Pause and Play', href: '/pause' }
      ]
    },
    {
      id: 'health',
      title: '🏋️ Health & Wellness',
      subcategories: [
        { name: 'Snack Smarts', href: '/snack' },
        { name: 'Fit in a Flash', href: '/fit' },
        { name: 'Mind Spa', href: '/mindspa' }
      ]
    },
    {
      id: 'home',
      title: '🏠 Home & Life Skills',
      subcategories: [
        { name: 'Zen Den', href: '/zenden' },
        { name: 'Fix-It Fast', href: '/fixit' },
        { name: 'Laundry Lab', href: '/laundry' },
        { name: 'Survival Mode', href: '/survival' }
      ]
    },
    {
      id: 'travel',
      title: '✈️ Travel & Transportation',
      subcategories: [
        { name: 'Pack Like a Pro', href: '/packpro' },
        { name: 'Wander Wise', href: '/wanderwise' },
        { name: 'Commute Companion', href: '/commute' },
        { name: 'Safe Travels HQ', href: '/safetravels' }
      ]
    }
  ];

  const scrollToCategory = (index) => {
    setActiveCategory(index);
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardRefs.current;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      cards.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          
          if (cardCenter >= 0 && cardCenter <= windowHeight) {
            setActiveCategory(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar 
        bgColor="#1F2933" 
        textColor="#DFD0B8" 
        transparent={false}
        position="fixed"
      />
      
      <div className="dashboard-container" style={{ paddingTop: '80px' }}>        {/* Side Navigation */}
        <div className={`side-navigation ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-header">
            <h3>Categories</h3>
            <button 
              className="collapse-btn"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              {sidebarCollapsed ? '→' : '←'}
            </button>
          </div>
          <ul className="nav-list">
            {categories.map((category, index) => (
              <li 
                key={category.id}
                className={`nav-item ${activeCategory === index ? 'active' : ''}`}
                onClick={() => scrollToCategory(index)}
                title={category.title}
              >
                {sidebarCollapsed ? category.title.split(' ')[0] : category.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <h1 className="dashboard-heading">My Dashboard</h1>
          
          <div className="cards-container">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                ref={el => cardRefs.current[index] = el}
                className={`category-card ${category.id} ${
                  activeCategory === index ? 'active' : 
                  activeCategory > index ? 'fallen' : 'upcoming'
                }`}
              >
                <h2>{category.title}</h2>
                <div className="subcategories">
                  {category.subcategories.map((sub, subIndex) => (
                    <div key={subIndex} className="card">
                      <a href={sub.href}>{sub.name}</a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;