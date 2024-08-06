import React from 'react';
import './Infocards.css';

const InfoCards = () => {
  const cards = [
    { icon: '🏢', title: 'OBJECTIVE' },
    { icon: '📝', title: 'IMPLEMENTATION' },
    { icon: '👷', title: 'APPROACH' },
    { icon: '📋', title: 'SPHERE OF ACTIVITIES' },
    { icon: '📱', title: 'MOBILE APPS' },
  ];

  return (
    <div className="info-cards-container">
      {cards.map((card, index) => (
        <div key={index} className="info-cards">
          <div className="info-card-icon">{card.icon}</div>
          <div className="info-card-title">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
