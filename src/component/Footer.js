import React, { forwardRef } from 'react';
import '../css/Footer.css';

const Footer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="container">
          <div className="header">
            <div className="title">
              Stay up to date on <br />
              the latest TurinGradient <br />
              news
            </div>
    
            <div className="form-section">
              <div className="description">
                For any enquiries, questions or comments please fill out the following form.
              </div>
              <div className="form-inputs">
                <input 
                  id="FormEmail"
                  type="email" 
                  placeholder="Email address" 
                  className="email-input"
                />
    
                <button 
                  id="ButtonCallToActions"
                  className="submit-button"
                >
                  Submit
                <img
                  src="https://file.rendit.io/n/pIR5makETq7YRnSqLUnY.svg"
                  alt="Arrow"
                  className="arrow-icon"
                />
                </button>
              </div>
            </div>
          </div>
          <div className="footer-top-line"></div>
          <div className="footer">
            <div className="links">
              <span className="link-item">About Us</span>
              <span className="link-item">Products</span>
              <span className="link-item">Latest News</span>
              <span className="link-item">Terms of Service</span>
            </div>
              
            <div className="copyright">
              Copyright © 2024 DataLynn Inc.
            </div>
            
            <div className="social-icons">
              <img
                src="https://file.rendit.io/n/3TFIoYiLP8Ja7IukXGmx.svg"
                alt="Facebook"
                className="social-icon"
              />
              <img
                src="https://file.rendit.io/n/xsXlqqIKOUPjZCHJnftM.svg"
                alt="Twitter"
                className="social-icon"
              />
              <img
                src="https://file.rendit.io/n/T0pCJWB5amjfHYD6eH5q.svg"
                alt="Instagram"
                className="social-icon"
              />
            </div>
          </div>
        </div>
      )
});

export default Footer;