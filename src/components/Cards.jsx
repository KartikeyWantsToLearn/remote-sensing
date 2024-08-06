import React from 'react';
import './Card.css';

const Card = ({ name, position, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} className="card-img" />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Card;
