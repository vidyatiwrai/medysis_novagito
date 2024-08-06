import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/Components/Subnavbar.css"; 

const SubNavbar = () => {
  return (
    <div className="sub-navbar">
      <div className="sub-navbar-links">
        <Link to="/home" className="sub-navbar-item">Home</Link>
        <Link to="/about" className="sub-navbar-item">About</Link>
        <Link to="/dental" className="sub-navbar-item">Dental</Link>
        <Link to="/featured" className="sub-navbar-item">Featured</Link>
        <Link to="/offers" className="sub-navbar-item">Offers</Link>
      </div>
      <div className="quick-order-button">
        <button>Quick Order</button>
      </div>
    </div>
  );
};

export default SubNavbar;
