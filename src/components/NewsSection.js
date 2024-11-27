import React from 'react';
import '../styles/NewsSection.css';

const NewsSection = () => {
  const news = `Trump is launching a cryptocurrency platform, and we have no idea what it does. There are few public details about the platform...`;

  return (
    <div className="news-section">
      <h2>Latest News 📰</h2>
      <p>{news}</p>
    </div>
  );
};

export default NewsSection;
