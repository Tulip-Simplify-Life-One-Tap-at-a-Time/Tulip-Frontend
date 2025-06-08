import React from 'react';

const Button = ({ 
  type, 
  text, 
  onClick, 
  bgColor = '#DFD0B8', 
  textColor = '#222831',
  borderColor = '#DFD0B8'
}) => {
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const primaryStyle = {
    backgroundColor: bgColor,
    color: textColor,
    border: 'none'
  };

  const secondaryStyle = {
    backgroundColor: 'transparent',
    color: textColor,
    border: `2px solid ${borderColor}`
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...(type === 'primary' ? primaryStyle : secondaryStyle)
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;