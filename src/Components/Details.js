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
      <div className="container-detail">
        <div className="detail-header d-flex">
          <img src={coin.icon} alt="coin" />
          <h2>
            <span>
              #
              {coin.rank}
            </span>
            {' '}
            {coin.name}
          </h2>
        </div>
        <div className="card-detail">
          <div className="card-body-detail d-flex">
            <p className="card-title">Name</p>
            <p className="card-title">{coin.name}</p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Symbol</p>
            <p className="card-title">{coin.symbol}</p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Price to USD</p>
            <p className="card-title">
              $
              {coin.price.toFixed(2)}
            </p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Price in Btc</p>
            <p className="card-title">
              {coin.priceBtc.toFixed(2)}
            </p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Volume</p>
            <p className="card-title">
              {coin.volume.toFixed(2)}
              B
            </p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Market CAP</p>
            <p className="card-title">
              {coin.marketCap.toFixed(2)}
              B
            </p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Available Supply</p>
            <p className="card-title">{coin.availableSupply}</p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Total Supply</p>
            <p className="card-title">{coin.totalSupply}</p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Price change in 1hr</p>
            <p className="card-title">
              {coin.priceChange1h}
              %
            </p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Price change in 1 day: </p>
            <p className="card-title">
              {coin.priceChange1d}
              %
            </p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Price change in 1 week: </p>
            <p className="card-title">
              {coin.priceChange1w}
              %
            </p>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Website: </p>
            <a href={coin.websiteUrl} target="_blank" rel="noreferrer" className="card-title">Visit</a>
          </div>
          <div className="card-body-detail d-flex">
            <p className="card-title">Twitter: </p>
            <a href={coin.twitterUrl} target="_blank" rel="noreferrer" className="card-title">Visit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
