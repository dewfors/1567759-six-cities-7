import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getAdaptedToClientComments, getAdaptedToClientOffers} from './utils/utils';
import {CITY} from './mocks/city';

const offers = getAdaptedToClientOffers();
const comments = getAdaptedToClientComments();

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} comments={comments} city={CITY}/>
  </React.StrictMode>,
  document.getElementById('root'));
