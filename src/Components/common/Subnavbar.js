import React from 'react';
import "../../Styles/Components/Subnavbar.css"; 

const SubNavbar = () => {
  return (
    <div className="sub-navbar">
      <div className="sub-navbar-links">
        <a href="/home" className="sub-navbar-item">Home</a>
        <a href="/about" className="sub-navbar-item">About</a>
        <a href="/dental" className="sub-navbar-item">Dental</a>
        <a href="/featured" className="sub-navbar-item">Featured</a>
        <a href="/offers" className="sub-navbar-item">Offers</a>
      </div>
      <div className="quick-order-button">
        <button>Quick Order</button>
      </div>
    </div>
  );
};

export default SubNavbar;
