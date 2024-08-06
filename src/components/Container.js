import React from 'react';
import './Container.css';
import Card from './Cards';

const Container = () => {
  const cardData = [
    { name: 'Shri Yogi Adityanath', position: 'Hon\'ble Chief Minister Uttar Pradesh President, General Body, RSAC-UP(ex-officio)', imgSrc: 'https://rsac.up.gov.in/site/writereaddata/siteContent/201801301527104023cmm.jpg' },
    { name: 'Shri Anil Kumar', position: 'Hon\'ble Minister Uttar Pradesh Vice President, General Body, RSAC-UP(ex-officio)', imgSrc: 'https://rsac.up.gov.in/site/writereaddata/siteContent/202403131243573962anil%20kumarnew2.jpg' },
    { name: 'Shri Ajit Singh Pal', position: 'Hon\'ble State Minister Uttar Pradesh Vice President, General Body, RSAC-UP(ex-officio)', imgSrc: 'https://rsac.up.gov.in/site/writereaddata/siteContent/202406261627572527ajit_singh.jpg' },
    { name: 'Shri Pandhari Yadav', position: 'IAS C.G.B.(ex-officio), Prin. Secr., Deptt. of S&T, Gov. of UP', imgSrc: 'https://i.pinimg.com/236x/f9/75/81/f9758151b717582c500f0dcc33beca4f.jpg' },
    { name: 'Shri Shiv Prasad', position: 'IAS Director, Special Secretary, Department of S&T, Gov. of UP', imgSrc: 'https://rsac.up.gov.in/site/writereaddata/siteContent/202404291046568072ias1.jpeg' },
  ];

  return (
    <div className="main-container">
      <div className="left-box">
        <h2>Remote Sensing Applications Centre, Uttar Pradesh</h2>
        <p>
          Uttar Pradesh was the first and foremost state in the country to establish the first state Remote Sensing Applications Centre, Uttar Pradesh (RSAC-UP) in May, 1982 at Lucknow. RSAC-UP has been utilizing the geospatial technologies of satellite remote sensing, Image Processing, GIS, GPS, LiDAR, Bathymetry, Customized Software Development using AI,...
        </p>
        <button>Read More</button>
      </div>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card key={index} name={card.name} position={card.position} imgSrc={card.imgSrc} />
        ))}
      </div>
    </div>
  );
};

export default Container;
