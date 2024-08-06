// src/NewsItem.js
import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, size, language, date }) => {
  return (
    <div className="news-item">
      <div className="news-title">
        {title} <span className="news-category">[ General ]</span>
      </div>
      <div className="news-info">
        <span>📄 Size: {size} | Language: {language}</span>
        <span className="news-date">Last Date : {date}</span>
      </div>
    </div>
  );
};

export default NewsItem;