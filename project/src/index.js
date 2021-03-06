import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import {AuthorizationStatus} from './utils/const';
import {requireAuthorization} from './store/action';
import {
  checkAuth,
  fetchHotels
} from './store/api-actions';
import Redirect from './store/redirect';
import browserHistory from './utils/browser-history';

const api = createAPI(() => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
});

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
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
