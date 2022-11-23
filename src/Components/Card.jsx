import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ coin }) => (
  <Link to={coin.id}>
    <div className="card">
      <div className="card__container d-flex" key={coin.id}>
        <div className="card-header d-flex">
          <h2>
            {coin.rank}
            {'. '}
            {coin.name}
          </h2>
          <img src={coin.icon} alt={coin.name} />
        </div>
        <div className="card-body">
          <p>
            Symbol:
            {' '}
            {coin.symbol}
          </p>
          <p>
            Price:
            {' '}
            $
            {Math.round(coin.price * 100) / 100}
          </p>
          <p>
            Daily Change:
            {' '}
            {coin.priceChange1d}
            %
          </p>
        </div>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceChange1d: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
