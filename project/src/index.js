import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getAdaptedToClientOffers} from './utils/utils';

const offers = getAdaptedToClientOffers();

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
