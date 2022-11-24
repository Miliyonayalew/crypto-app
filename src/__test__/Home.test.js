import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../Components/Home';

describe('Test the Components', () => {
  test('Renders Home correctly', () => {
    const home = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
  test('Renders Home with correct text', () => {
    const home = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(home.getByText('Crypto Stats')).toBeInTheDocument();
    expect(home.getByText('Market Cap')).toBeInTheDocument();
    expect(home.getByText('24h Volume')).toBeInTheDocument();
    expect(home.getByText('Top 100 Cryptocurrencies')).toBeInTheDocument();
  });
});
