import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Urlshortner.css";

const Urlshortner = () => {
  const [longurl, setlongurl] = useState('');
  const [urlList, setUrlList] = useState([]);

  const navigate = useNavigate();

  function generateShortCode(length = 6) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  function shortenUrl() {
    if (!longurl) {
      alert("Please enter a URL");
      return;
    }

    const shortCode = generateShortCode();
    const shortUrl = `https://short.ly/${shortCode}`;
    
    const newEntry = { longurl, shortUrl };
    setUrlList([...urlList, newEntry]);

    
    navigate("/urls", { state: { urls: [...urlList, newEntry] } });
  }

  return (
    <div className="urlshort">
      <h1>Url Shortener</h1>
      <label>Long Url:</label>
      <input type="text" value={longurl} onChange={(e) => setlongurl(e.target.value)} />
      <button onClick={shortenUrl}>Short The Url</button>
    </div>
  );
};

export default Urlshortner;
