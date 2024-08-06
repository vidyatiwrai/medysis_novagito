import React, { useState } from 'react';
import logo from "../../src/images/logo.png";
import otpbag from "../../src/images/otpbag.png";
import "../Styles/Components/otpbox.css";

const Otpbox = ({ onClose }) => {
    const [otp, setOtp] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('OTP:', otp);
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
          <img src={otpbag} alt="Popup" className="otpbag-img" />
          <form onSubmit={handleSubmit}>
            <h5>Quick Login/Register </h5>
            <div className='form-container'>
              <label>
              Enter 6 Digit OTP
                <input
                  type="text"
                  placeholder='Enter OTP'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <p className='otpvalid'>Resend OTP in 0:23 sec</p>
              </label>
              <button type="submit">Verify OTP</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default Otpbox;
