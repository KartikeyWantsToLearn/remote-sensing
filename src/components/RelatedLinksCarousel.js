import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RelatedLinksCarousel.css';
import img1 from'../images/Bhuvan.png';
import img2 from'../images/NRSC-ISRO.png';
import img3 from'../images/WRIS.png';
import img4 from'../images/SAG.png';
import img5 from'../images/Shriti.png';
import img6 from'../images/CSTUP.png';
import img7 from'../images/GovernmentOfIndia.png';
import img8 from'../images/GovOfIIRS.png';
import img9 from'../images/ISRO.png';
import img10 from'../images/NPOI.png';
import img11 from'../images/GS.png';




const RelatedLinksCarousel = () => {
  const linkData = [
    { imgSrc: img1, altText: 'Bhuvan - Indian Geo-Platform of ISRO' },
    { imgSrc: img2, altText: 'National Remote Sensing Centre - Indian Space Research Organisation' },
    { imgSrc: img3, altText: 'India-WRIS' },
    { imgSrc: img4, altText: 'Space Application Govt' },
    { imgSrc: img5, altText: 'Srishti ' },
    { imgSrc: img6, altText: 'CSTUP'},
    { imgSrc: img7 , altText: 'GovernmentOfIndia'},
    { imgSrc: img8 , altText: 'GovOfIIRS'},
    { imgSrc: img9 , altText: 'ISRO'},
    { imgSrc: img10 , altText: 'NPOI'},
    { imgSrc: img11 , altText: 'Gati Shakti'},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };

  return (
    <div className="related-links-carousel">
      <h2>Related Links</h2>
      <Slider {...settings}>
        {linkData.map((link, index) => (
          <div key={index} className="carousel-item">
            <img src={link.imgSrc} alt={link.altText} className="carousel-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RelatedLinksCarousel;
