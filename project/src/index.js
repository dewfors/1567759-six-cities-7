import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {getAdaptedToClientComments, getAdaptedToClientOffers} from './utils/utils';
import {CITY} from './mocks/city';
import {reduser} from './store/reduser';

const offers = getAdaptedToClientOffers();
const comments = getAdaptedToClientComments();

const store = createStore(reduser);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} comments={comments} city={CITY}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
