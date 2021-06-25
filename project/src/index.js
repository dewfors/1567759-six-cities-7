import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {getAdaptedToClientComments, getAdaptedToClientOffers} from './utils/utils';
import {CITY} from './mocks/city';
import {reduser} from './store/reduser';
import {Settings} from './utils/const';

const offers = getAdaptedToClientOffers();

// console.log(offers);

const comments = getAdaptedToClientComments();

const store = createStore(
  reduser,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} comments={comments} city={CITY} cityList={Settings.CITYES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
