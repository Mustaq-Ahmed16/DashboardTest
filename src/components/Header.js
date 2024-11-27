import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SafeCryptoStocks</div>
      <nav className="nav">
        <a href="#">Dashboard</a>
        <a href="#">Market</a>
        <a href="#">Portfolio</a>
        <a href="#">Budget</a>
        <a href="#">Learn</a>
      </nav>
      <div className="profile">
        <span>v saiteja viswanath</span>
      </div>
    </header>
  );
};

export default Header;
