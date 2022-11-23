import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { fetchCoins } from '../redux/features/coinSlice';
import Card from './Card';

const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coin.coins);
  const loading = useSelector((state) => state.coin.loading);

  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCoins());
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
    <div>
      <Navbar title="Crypto App" />
      <h1>Home</h1>
      {loading && <h1>Loading...</h1>}
      <input
        type="text"
        placeholder="Search Crypto by name, symbol or rank"
        className="search"
        onChange={handleSearch}
        value={search}
      />
      <div className="container">
        {filteredCoins.map((coin) => (
          <Card
            key={coin.id}
            coin={coin}
          />
        ))}
      </div>
      {/* <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name}
            <img src={coin.icon} alt={coin.name} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
