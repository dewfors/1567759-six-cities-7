import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getAdaptedToClientOffers} from './utils/utils';
import {CITY} from './mocks/city';

const offers = getAdaptedToClientOffers();

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} city={CITY}/>
  </React.StrictMode>,
  document.getElementById('root'));
