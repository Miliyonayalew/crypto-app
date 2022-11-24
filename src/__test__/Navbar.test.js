import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Navbar';

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Router>
        <Navbar title="" />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('Renders Navbar with correct text', () => {
    const navbar = render(
      <Router>
        <Navbar title="Crypto App" />
      </Router>,
    );
    expect(navbar.getByText('Crypto App')).toBeInTheDocument();
    expect(navbar.getByAltText('logo')).toBeInTheDocument();
  });
});
