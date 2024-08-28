import React from 'react';
import './ItemGrid.css'; // Import the CSS file for styling



const items = [
  { name: 'Gloves', offers: '4.8K OFFERS', price: '$59.99', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.pYtYeVD51ryZkeLZGQTkcAHaHF&pid=Api&P=0&h=180' },
  { name: 'AWP', offers: '16.3K OFFERS', price: '$0.12', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.5zALOwi_YJUwkhGsWhhafAHaDP&pid=Api&P=0&h=180' },
  { name: 'Knives', offers: '17.6K OFFERS', price: '$78.28', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.H6vLSZZUCrAxMVU27KkzbQHaDt&pid=Api&P=0&h=180' },
  { name: 'AK-47', offers: '24.5K OFFERS', price: '$0.19', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.NxrV1CN3H26Gf8ND_4duMwHaEK&pid=Api&P=0&h=180' },
];

const ItemGrid = () => {
  return (
    <>
    <div className="head"><h1>EXPLORE BEST OFFER FOR POPULAR ITEMS</h1></div>
    <div className="item-grid">
     
      {items.map((item, index) => (
        <div key={index} className="item-card">
          <img src={item.imageUrl} alt={item.name} className="item-image" />
          <div className="item-info">
            <h3>{item.offers}</h3>
            <p>START FROM {item.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ItemGrid;
