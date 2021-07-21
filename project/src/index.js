import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {getAdaptedToClientComments} from './utils/utils';
import {CITY} from './mocks/city';
// import {reduser} from './store/reduser';
import rootReducer from './store/redusers/root-ruduser';
import {AuthorizationStatus, Settings} from './utils/const';
import {ActionCreator} from './store/action';
import {checkAuth, fetchHotels} from './store/api-actions';
import Redirect from './store/redirect';

const api = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const comments = getAdaptedToClientComments();

// const store = createStore(
//   // reduser,
//   rootReduser,
//   composeWithDevTools(
//     applyMiddleware(thunk.withExtraArgument(api)),
//     applyMiddleware(Redirect),
//   ),
// );

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(Redirect),
});



store.dispatch(checkAuth());
store.dispatch(fetchHotels());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App offers={offers} comments={comments} city={CITY} cityList={Settings.CITYES}/>*/}
      <App comments={comments} city={CITY} cityList={Settings.CITYES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
