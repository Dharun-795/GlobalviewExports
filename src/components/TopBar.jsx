import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <i className="fas fa-award" style={{ color: '#e5b358' }}></i>
            <span>Registered Member - Coir Board, Govt. of India</span>
          </div>
          <div className="top-bar-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@globalviewexports.com">info@globalviewexports.com</a>
          </div>
          <div className="top-bar-item">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+919842783222">+91 98427 83222</a>
            <span style={{ margin: '0 0.25rem', opacity: 0.7 }}>/</span>
            <a href="tel:+919942533825">+91 99425 33825</a>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Tiruchengode, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
