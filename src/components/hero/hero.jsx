import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import the CSS file for styling


const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: 'https://tse3.mm.bing.net/th?id=OIP.HiON7Ftl2liGkvTZZYCI1QHaEo&pid=Api&P=0&h=180', alt: 'Gun' },
    { src: 'https://tse3.mm.bing.net/th?id=OIP.l7bc7hjHtOeMnvetM6mrswHaDr&pid=Api&P=0&h=180', alt: 'Gloves' },
    { src: 'https://images.alphacoders.com/103/103053.jpg', alt: 'AK47' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-text">
          <h1>REFRESH YOUR INVENTORY</h1>
          <p>EXCHANGE SKINS GET NEW ONCE WITH BEST CONDITIONS</p>
        </div>
        <button className="trade-button">
          START TRADE <span className="arrow">→</span>
        </button>
        <div className="hero-image">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="animated-image"
          />
        </div>
      </div>
      <div className="hero-right ">
        <div className="mission-card flip-card-inner">
          <div className='flip-card-front'>
          <h2>DMARKET MISSIONS</h2>
          <p>COMPLETE MISSION GET REWARD EACH WEEK</p>
          <img src="https://tse3.mm.bing.net/th?id=OIP.o5bY47k8I6gb8sMzrjCbxAHaEK&pid=Api&P=0&h=180" alt="Characters" className="mission-image" /> {/* Replace with your characters image path */}
          <div className="reward">
            <p>$100 GIFT CARD</p>
            </div>
          </div>
        </div>
        <div className="live-feed">
          <h3>LIVE FEED</h3>
          <div className="feed-scroller">
            <div className="feed-item">
              <img src="https://tse4.mm.bing.net/th?id=OIP.-BGKMPzgt6hWXzCgS58fCwHaFL&pid=Api&P=0&h=180" alt="Knife" /> {/* Replace with actual image paths */}
              <p>$82.00</p>
            </div>
            <div className="feed-item">
              <img src="https://tse2.mm.bing.net/th?id=OIP.R3sjEiXFV0Hzo-Tz8TSASAHaEG&pid=Api&P=0&h=180" alt="Knife 2" />
              <p>$77.82</p>
            </div>
            <div className="feed-item">
              <img src="https://tse4.mm.bing.net/th?id=OIP.iOzqq_1oSsKwV6b2TPh8bAHaEK&pid=Api&P=0&h=180" alt="Mask" />
              <p>$90.40</p>
            </div>
            {/* Repeat more items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
