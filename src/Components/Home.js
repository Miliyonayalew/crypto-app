import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'loading-animations-react';
import Navbar from './Navbar';
import {
  fetchCoins, error, loading,
  allcrypto,
} from '../redux/features/coinSlice';
import Card from './Card';
import logo from '../assest/logo.png';

let didInit = false;
const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector(allcrypto);
  const Loading = useSelector(loading);
  const Error = useSelector(error);

  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!didInit) {
      dispatch(fetchCoins());
      didInit = true;
    }
  }, [dispatch]);

  const filteredCoins = coins ? coins.filter(
    (coin) => coin.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
              || coin.symbol.toLowerCase().includes(search.toLowerCase()),
      ) || coin.rank.toString().includes(search.toString()),
  ) : [];
  return (
    <div className="app-container">
      <Navbar title="Crypto App" />
      <div className="stat-container">
        <h1 className="title">Crypto Stats</h1>
        <div className="stats d-flex">
          <img src={logo} alt="logo" />
          <div className="stats-data d-flex">
            <div>
              <h2>Market Cap</h2>
              <p>
                {coins[0]?.marketCap}
                {' '}
                B
              </p>
            </div>
            <div>
              <h2>24h Volume</h2>
              <p>
                {coins[0]?.volume}
                {' '}
                B
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="search-container d-flex">
          <input
            type="text"
            placeholder="Search by name, symbol or rank"
            className="search"
            onChange={handleSearch}
            value={search}
          />
        </div>
        <h2>Top 100 Cryptocurrencies</h2>
        <div className="d-flex spinner">
          {Loading && <Spinner />}
          {Error && <h1>{Error}</h1>}
        </div>
        <div className="card-container">
          {filteredCoins.map((coin) => (
            <Card
              key={coin.id}
              coin={coin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
