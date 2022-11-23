import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import Navbar from './Navbar';

const Details = () => {
  const { id } = useParams();
  const coins = useSelector((state) => state.coin.coins);
  const coin = coins.find((coin) => coin.id === id);
  return (
    <div>
      <Navbar title={<IoChevronBackOutline />} />
      <h1>Details</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{coin.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{coin.symbol}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
