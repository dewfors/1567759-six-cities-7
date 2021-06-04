import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

import PageMain from '../page-main/page-main';
import PageFavorites from '../page-favorites/page-favorites';
import PageNotFound from '../page-not-found/page-not-found';
import PageOffer from '../page-offer/page-offer';
import PageLogin from '../page-login/page-login';

const placesToStay = 515;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {AppRoute.ROOT}>
          <PageMain placesToStay = {placesToStay}/>
        </Route>
        <Route exact path = {AppRoute.FAVORITES}>
          <PageFavorites />
        </Route>
        <Route exact path = {AppRoute.LOGIN}>
          <PageLogin />
        </Route>
        <Route exact path = {AppRoute.OFFER}>
          <PageOffer />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
