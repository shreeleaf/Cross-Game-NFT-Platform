import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from './../../assets/logo2.png';
import helpIcon from './../../assets/help.png';
import langIcon from './../../assets/lang.png';
import hotdealIcon from './../../assets/hotdeal.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="DMarket Logo" className="logo" /> {/* Replace 'logo.png' with your actual logo path */}
        <span>CROSS GAME NFT</span>
      </div>
      <ul className="navbar-menu">
        <li className='hover'><a href="#marketplace">MARKETPLACE</a></li>
        <li className='hover'><a href="#top-txns" >TOP TXNS</a></li>
        <li className='hover'><a href="#explorer" >EXPLORER</a></li>
        <li className='hover'><a href="#trading-api">TRADING API</a></li>
        <li className='hover'><a href="#blog" >BLOG</a></li>
      </ul>
      <div className="navbar-actions">
        <div className="icon-container">
          <img src={helpIcon} alt="Help" className="icon" /> 
          <img src={langIcon} alt="Language" className="icon" />
          <img src={hotdealIcon} alt="Hot Deals" className="icon" />
        </div>
        <button className="login-btn"><b>Log in</b></button>
        <button className="signup-btn">Sign up</button>
        <button className="wallet-btn"><b>Connect Wallet</b></button>
      </div>
    </nav>
  );
}

export default Navbar;
