// src/NewsEvents.js
import React from 'react';
import NewsItem from '../components/NewsItems';
import './NewsEvents.css';

const NewsEvents = () => {
  const newsData = [
    {
      title: 'GIS based land use and urban surveys and asset management.',
      size: '95 KB',
      language: 'Hindi',
      date: '10/12/2021'
    },
    {
      title: 'Flood affected area mapping and flood mitigation related studies by RSAC, UP.',
      size: '82 KB',
      language: 'Hindi',
      date: '10/12/2021'
    },
    {
      title: 'Online Applications are invited for the course, M.Tech in...',
      size: '',
      language: '',
      date: ''
    }
  ];

  return (
    <div className="news-events">
      <h2>NEWS & EVENTS</h2>
      <div className="news-list">
        <div className="news-list-content">
          {newsData.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              size={news.size}
              language={news.language}
              date={news.date}
            />
          ))}
        </div>
      </div>
      <div className="view-all-news">View All News ➤</div>
    </div>
  );
};

export default NewsEvents;