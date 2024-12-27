import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';  // For grid styling

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <p className="welcome-message">"Welcome to our Ethnic Collections!"</p>
      <div className="grid-container home-grid">
        <Link to="/birthday" className="grid-item">
          <img src="src/assets/birthday.jpeg" alt="Birthday" />
          <span>Birthday</span>
        </Link>
        <Link to="/anniversary" className="grid-item">
          <img src="src/assets/anniversary.jpeg" alt="Anniversary" />
          <span>Anniversary</span>
        </Link>
        <Link to="/wedding" className="grid-item">
          <img src="src/assets/wedding.jpeg" alt="Wedding" />
          <span>Wedding</span>
        </Link>
        <Link to="/engagement" className="grid-item">
          <img src="src/assets/eng.jpeg" alt="Engagement" />
          <span>Engagement</span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
