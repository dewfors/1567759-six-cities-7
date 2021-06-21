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
  const {offers, comments, city} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path = {AppRoute.ROOT}>
          <PageMain placesToStay = {placesToStay} offers={offers} city={city}/>
        </Route>
        <Route exact path = {AppRoute.FAVORITES} render={(() => <PageFavorites offers={offers} />)} />
        <Route exact path = {AppRoute.LOGIN}>
          <PageLogin />
        </Route>
        <Route exact path = {AppRoute.OFFER} render={(() => <PageOffer comments={comments} />)} />
        <Route exact path = {AppRoute.OFFER} component={PageOffer} />
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
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
