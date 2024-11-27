import logo from './logo.svg';
import './App.css';
import TrendingCoins from './components/TrendingCoins';
import CryptoMarket from './components/CryptoMarket';
import NewsSection from './components/NewsSection';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="dashboard">
        <TrendingCoins />
        <CryptoMarket />
        <NewsSection />
      </div>
    </div>
  );
}

export default App;
