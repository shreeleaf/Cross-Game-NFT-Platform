import React from 'react';
import './GameCards.css'; // Import the CSS file for styling



const games = [
  { 
    name: 'Counter-Strike 2', 
    skins: '1 MILLION+', 
    transactions: '300K+ TRANSACTIONS EVERY MONTH', 
    imageUrl:'https://tse2.mm.bing.net/th?id=OIP.MBSHDj1D3fh3bd7gJOMUXQHaDu&pid=Api&P=0&h=180', 
    color: '#282828' 
  },
  { 
    name: 'Team Fortress 2', 
    skins: '250 THOUSANDS+', 
    transactions: '35K+ TRANSACTIONS EVERY MONTH', 
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.v5NRYfmIrjklU18aUDeIRwHaEK&pid=Api&P=0&h=180', 
    color: '#CC6633' 
  },
  { 
    name: 'Rust', 
    skins: '30 THOUSANDS+', 
    transactions: '20K+ TRANSACTIONS EVERY MONTH', 
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.u1Kq2Ge8jyLKhWWhJtTpyQHaEK&pid=Api&P=0&h=180', 
    color: '#FFCC33' 
  },
  { 
    name: 'Dota 2', 
    skins: '70 THOUSAND+', 
    transactions: '30K+ TRANSACTIONS EVERY MONTH', 
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.uS_HgRrVoWV4fjbIFh0jQgHaEK&pid=Api&P=0&h=180', 
    color: '#FF0033' 
  },
];

const GameCards = () => {
  return (
    <>
    <div className="header">SKINS OF YOUR FAVOURITE GAMES</div>
    <div className="game-cards">
      {games.map((game, index) => (
        <div 
          key={index} 
          className="game-card" 
          style={{ backgroundColor: game.color }}
        >
          <div className="card-content">
            <img src={game.imageUrl} alt={game.name} className="game-image" />
            <div className="text-content">
              <h4>{game.name.toUpperCase()}</h4>
              <h2>{game.skins} SKINS</h2>
              <p>{game.transactions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default GameCards;
