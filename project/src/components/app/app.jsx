import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import PageMain from '../page-main/page-main';
import PageFavorites from '../page-favorites/page-favorites';
import PageNotFound from '../page-not-found/page-not-found';
import PageOffer from '../page-offer/page-offer';
import PageLogin from '../page-login/page-login';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop.js';

const placesToStay = 515;

function App(props) {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path = {AppRoute.ROOT}>
          <PageMain placesToStay = {placesToStay} offers={offers}/>
        </Route>
        <Route exact path = {AppRoute.FAVORITES} render={(() => <PageFavorites offers={offers} />)} />
        {/*<Route exact path = {AppRoute.FAVORITES}>*/}
        {/*  <PageFavorites offers={offers} />*/}
        {/*</Route>*/}
        <Route exact path = {AppRoute.LOGIN}>
          <PageLogin />
        </Route>
        <Route exact path = {AppRoute.OFFER} component={PageOffer} />
        {/*<Route exact path = {AppRoute.OFFER}>*/}
        {/*  <PageOffer />*/}
        {/*</Route>*/}
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
};

export default App;
