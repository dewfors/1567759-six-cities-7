import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getAdaptedToClientOffers} from './mocks/offers.js'

const offers = getAdaptedToClientOffers();
console.log(offers);

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
