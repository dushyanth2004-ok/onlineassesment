import React, { useState } from 'react'



import "./Urlshortner.css";
const Urlshortner = () => {
  const [longurl,setlongurl]=useState('');
  const [userlshortner,setuserlshortner]=useState('');


  function generateShortCode(length = 6) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let code = "";
      for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return code;
    }

    function shortenUrl() {
      const urlDatabase = {}; 

      if (!longurl) {
        alert("Please enter a URL");
        return;
      }

      const shortCode = generateShortCode();
      urlDatabase[shortCode] = longurl;

      const shortUrl = `https://short.ly/${shortCode}`; 
      setuserlshortner(shortUrl);
    }

  
  const urlshort=()=>{
        
    shortenUrl();


  }
  return (
    <>
    <div className="urlshort">
      <h1>Url Shortner</h1>
      <label>Long Url : </label>
        <input type="text" value={longurl} onChange={(e)=>setlongurl(e.target.value)}/>
        <label>Short Url : </label>
        <div className="short">
          <p>{userlshortner}</p>
        </div>
        <button onClick={urlshort}>Short The Url</button>

         <ul>
          {array.map((data)=>{
            <li>{data}</li>
          })}
         </ul>
    </div>
    </>
  )
}

export default Urlshortner