import React from 'react';
import Card from './Card';
import '../styles/Card.css';
import '../styles/CryptoMarket.css';

const CryptoMarket = () => {
  const data = [
    { name: 'Bitcoin', price: '$58,761', change: '-2.31%' },
    { name: 'Ethereum', price: '$2,295.47', change: '-5.17%' },
    { name: 'Tether', price: '$1', change: '+0.02%' },
  ];

  return (
    <Card title="Top Cryptocurrencies by Market Cap ⭐">
      {data.map((crypto, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 0',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <span>{crypto.name}</span>
          <span>{crypto.price}</span>
          <span style={{ color: crypto.change.startsWith('-') ? '#e53935' : '#43a047' }}>{crypto.change}</span>
        </div>
      ))}
    </Card>
  );
};

export default CryptoMarket;


// import React from 'react';
// import './CryptoMarket.css';

// const CryptoMarket = () => {
//   const data = [
//     { name: 'Bitcoin', price: '$58,761', change: '-2.31%' },
//     { name: 'Ethereum', price: '$2,295.47', change: '-5.17%' },
//     { name: 'Tether', price: '$1', change: '+0.02%' },
//   ];

//   return (
//     <div className="crypto-market">
//       <h2>Top Cryptocurrencies by Market Cap ⭐</h2>
//       {data.map((crypto, index) => (
//         <div key={index} className="crypto-item">
//           <span>{crypto.name}</span>
//           <span>{crypto.price}</span>
//           <span>{crypto.change}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CryptoMarket;
