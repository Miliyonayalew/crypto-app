import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ coin }) => (
  <Link to={coin.id}>
    <div className="card">
      <div className="card__container" key={coin.id}>
        <div className="card__container__left">
          <img src={coin.icon} alt={coin.name} />
          <h1>{coin.name}</h1>
          <p className="card__container__left__symbol">{coin.symbol}</p>
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
  }).isRequired,
};

export default Card;
