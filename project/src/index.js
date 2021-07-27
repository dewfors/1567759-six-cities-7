import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {getAdaptedToClientComments} from './utils/utils';
import {CITY} from './mocks/city';
import rootReducer from './store/redusers/root-ruduser';
import {AuthorizationStatus, Settings} from './utils/const';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchHotels} from './store/api-actions';
import Redirect from './store/redirect';
import browserHistory from './utils/browser-history';

const api = createAPI(() => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const comments = getAdaptedToClientComments();

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
        <App comments={comments} city={CITY} cityList={Settings.CITYES}/>
        {/*<App />*/}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
