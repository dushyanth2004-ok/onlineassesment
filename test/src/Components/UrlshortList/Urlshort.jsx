import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import  "./Urlshort.css"

const Urlshort = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlData = location.state?.urls || [];

  return (
    <div className="urllist">
      <h2>All Shortened URLs</h2>
      <ul>
        {urlData.map((item, index) => (
          <li key={index}>
            <strong>Long URL:</strong> {item.longurl}<br />
            <strong>Short URL:</strong> <a href={item.longurl} target="_blank" rel="noopener noreferrer">{item.shortUrl}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default Urlshort;
