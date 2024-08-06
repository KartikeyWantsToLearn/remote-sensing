import React, { useEffect, useState } from 'react';

import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.getElementById('navbar');
      const sticky = navbar.offsetTop;

      if (scrollTop > lastScrollTop) {
        // Scroll down
        if (scrollTop >= sticky) {
          setIsSticky(true);
        }
      } else {
        // Scroll up
        setIsSticky(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav id="navbar" className={`navbar navbar-expand-lg navbar-light bg-light ${isSticky ? 'sticky' : ''}` } >
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style={{marginLeft:'10vw'}} >
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Organisational Chart</a></li>
                  <li><a className="dropdown-item" href="#">Our Forms</a></li>
                  <li><a className="dropdown-item" href="#">Scientific Manpower</a></li>
                  <li><a className="dropdown-item" href="#">Administration And Auxiliary Staff</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Divisions
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Agricultural Resources Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Computer Image Processing Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Earth Resources Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Forest Resources and Ecology Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Groundwater Resources Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Geo-spatial Data Bank Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Landuse and Urban Survey Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Soil Resources Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Surface Water Resources Divisions</a></li>
                  <li><a className="dropdown-item" href="#">Training Divisions</a></li>
                  <li><a className="dropdown-item" href="#">School of Geo-Informatics</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Facilities
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Geoinfomatics Facilities</a></li>
                  <li><a className="dropdown-item" href="#">Water Analysis Lab</a></li>
                  <li><a className="dropdown-item" href="#">Soil Analysis Lab</a></li>
                  <li><a className="dropdown-item" href="#">Data Bank</a></li>
                  <li><a className="dropdown-item" href="#">Technical Cell</a></li>
                  <li><a className="dropdown-item" href="#">Library</a></li>
                  <li><a className="dropdown-item" href="#">Cartography and Repography</a></li>
                  <li><a className="dropdown-item" href="#">Training Hostels</a></li>
                  <li><a className="dropdown-item" href="#">Service Block</a></li>
                  <li><a className="dropdown-item" href="#">LiDAR and Bathymetry</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Academics
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">School Of Geo-infomatics</a></li>
                  <li><a className="dropdown-item" href="#">Training Division</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Geo-Portal
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">PM Gati Shakti</a></li>
                  <li><a className="dropdown-item" href="#">Pahuch</a></li>
                  <li><a className="dropdown-item" href="#">Bhuvan</a></li>
                  <li><a className="dropdown-item" href="#">NGDR</a></li>
                  <li><a className="dropdown-item" href="#">Samvedan</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Flood
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Flood 2024</a></li>
                <li><a className="dropdown-item" href="#">Flood 2023</a></li>
                <li><a className="dropdown-item" href="#">Flood 2022</a></li>
                <li><a className="dropdown-item" href="#">Flood 2021</a></li>
                <li><a className="dropdown-item" href="#">Flood 2020</a></li>
                <li><a className="dropdown-item" href="#">Flood 2019</a></li>
                <li><a className="dropdown-item" href="#">Flood 2018</a></li>
                <li><a className="dropdown-item" href="#">Flood 2017</a></li>
                <li><a className="dropdown-item" href="#">Flood 2016</a></li>
                <li><a className="dropdown-item" href="#">Flood Critical Map</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Photo Gallery</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  RTI
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Appelleate Authority</a></li>
                  <li><a className="dropdown-item" href="#">Memorandom of Association</a></li>
                  <li><a className="dropdown-item" href="#">General Service Rule</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Tender</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">FAQ</a>
              </li>
            </ul>
      </div>
    </nav>
  );
};


// const Navbar = () => {
//   return (  
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary custom-sticky-navbar" data-bs-theme="dark">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

export default StickyNavbar