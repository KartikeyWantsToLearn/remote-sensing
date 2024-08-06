// import logo from './logo.svg';

{/*     Routes template   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter> */}

      
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import UpLogo from './images/up-gov-logo.png'
import Navbar from './components/Navbar';
import Topnav from './components/Top_nav';
import Container from './components/Container';
import Carousel from './components/Carousel';
import RelatedLinksCarousel from './components/RelatedLinksCarousel';
import NewsEvents from './components/NewsEvents';
import InfoCards from './components/Infocards';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Topnav />

      <Navbar />
      


      <div id="middle-nav">
        <div className='logo'>
          <a href="#"><img src="https://rsac.up.gov.in/images/logo.png" alt="logo"></img></a>
        </div>
        <div id="social-media-handle">
          <a href=""><i className="fa fa-facebook-square fa-3x"></i></a>
          <a href=""><i className="fa fa-instagram fa-3x insta"></i></a>
          <a href=""><i className="fa fa-x-twitter fa-3x"></i></a>
        </div>
        <img src={UpLogo} alt="UP GOV_LOGO" />
      </div>



      <Carousel />

      <Container />
      <div className='info-news'>
        <div class="info-card">
          <div class="card-detail">
            <img src="https://anthamgroup.com/wp-content/uploads/2019/09/iStock-1042569776-1200x675.jpg" alt="Geoinformatics facilities" />
            <div class="card-data">
              <h3>Geoinformatics facilities</h3>
              <p>The Lab endeavours to provide information system solution in geospatial domain. The division enables the office to utilize the technology for innovate, execute, infer, archive and retrieve the information which is gleaned from plethora of remote sensing satellites and ancillary spatial and non-spatial data.</p>
            </div>
          </div>
          <div class="card-detail">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFn641s_ZqG92gJtjUcIzzgJWE6CRBc_jEFQ&s" alt="LiDAR & Bathymetry facilities" />
            <div class="card-data">
              <h3>LiDAR & Bathymetry facilities</h3>
              <p>Dedicated State-of-art Laboratory for LiDAR & SONAR data processing at Centre, with advanced computation resources and services focuses on planning, processing of 3D point cloud data collected from Mobile LiDAR and Terrestrial ...</p>
              <button class="read-more">Read More</button>
            </div>
          </div>
        </div>
        <NewsEvents />
      </div>

      <InfoCards/>

      <RelatedLinksCarousel />

      <Footer/>
    </>
  );
}

export default App;

