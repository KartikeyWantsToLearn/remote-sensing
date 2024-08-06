import React from 'react';
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#">Terms & Conditions</a> | 
        <a href="#">Copyright Policy</a> | 
        <a href="#">Privacy Policy</a> | 
        <a href="#">Hyperlinking Policy</a> | 
        <a href="#">Disclaimer</a> | 
        <a href="#">Help</a>
      </div>

<div className='footer-items'>
  <ul className="footer-middle">
        <li>© 2017 Remote Sensing Applications Centre, Uttar Pradesh</li>
        <li>This is the official Website of Remote Sensing Applications Centre, Uttar Pradesh.<br/>
        Content on this website is published and managed by Remote Sensing Applications Centre, Uttar Pradesh.</li>
        <li>For any query regarding this website, please contact the "Web Information Manager".</li>
      </ul>
     

      <ul className="footer-bottom">
        <li>Last Updated on : Today</li>
        <li>Visitor No. - </li>
        <li>Powered by: RSACUP</li>
      </ul>
      </div>
      
    </footer>
  );
};

export default Footer;
