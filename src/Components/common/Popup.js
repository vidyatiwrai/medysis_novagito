import React, { useState } from 'react';
import "../../Styles/Components/Popup.css";
import logo from "../../images/logo.png";
import medicalbag from "../../images/popuplogin.png"

const Popup = ({ onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mobile Number:', mobileNumber);
    onClose();
  };

  return (
    <div className="popup">
         <div className="top-green-section">
         <div className="top-logo">
          <img src={logo} alt="Logo" />
        </div>
         </div>
      <div className="popup-inner">
      <img src={medicalbag} alt="Popup" className="medicalbag-img" />
        <form onSubmit={handleSubmit}>
            <h5>Quick Login/Register </h5>
          <label>
            Mobile Number:
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
