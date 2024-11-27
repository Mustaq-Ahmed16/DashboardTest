import React from 'react';
import Card from './Card';
import '../styles/Card.css';
import '../styles/TrendingCoins.css';

const TrendingCoins = () => {
  const coins = [
    { name: 'Neiro on ETH', rank: 334 },
    { name: 'Neiro', rank: 428 },
    { name: 'Black Agnus', rank: 173 },
    { name: 'Baby Doge Coin', rank: 300 },
    { name: 'Turbo', rank: 197 },
  ];

  return (
    <Card title="Top Trending Coins 🔥">
      {coins.map((coin, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
          <span>{coin.name}</span>
          <span>Market Rank: {coin.rank}</span>
        </div>
      ))}
    </Card>
  );
};

export default TrendingCoins;


// import React from 'react';
// import './TrendingCoins.css';

// const TrendingCoins = () => {
//   const coins = [
//     { name: 'Neiro on ETH', rank: 334 },
//     { name: 'Neiro', rank: 428 },
//     { name: 'Black Agnus', rank: 173 },
//     { name: 'Baby Doge Coin', rank: 300 },
//     { name: 'Turbo', rank: 197 },
//   ];

//   return (
//     <div className="trending-coins">
//       <h2>Top Trending Coins 🔥</h2>
//       {coins.map((coin, index) => (
//         <div key={index} className="coin">
//           <span>{coin.name}</span>
//           <span>Market Rank: {coin.rank}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TrendingCoins;
