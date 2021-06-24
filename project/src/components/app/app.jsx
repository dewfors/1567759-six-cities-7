import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../utils/const';
import PageMain from '../page-main/page-main';
import PageFavorites from '../page-favorites/page-favorites';
import PageNotFound from '../page-not-found/page-not-found';
import PageOffer from '../page-offer/page-offer';
import PageLogin from '../page-login/page-login';
import placeCardProp from '../place-card/place-card.prop.js';
import reviewProp from '../reviews/review.prop';

const placesToStay = 515;

function App(props) {
  const {offers, comments, city} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {AppRoute.ROOT} render={(() => <PageMain placesToStay = {placesToStay} offers={offers} city={city} />)} />
        <Route exact path = {AppRoute.FAVORITES} render={(() => <PageFavorites offers={offers} />)} />
        <Route exact path = {AppRoute.LOGIN} component={PageLogin} />
        <Route exact path = {AppRoute.OFFER} render={((offerProps) => <PageOffer {...offerProps} offers={offers} city={city} comments={comments} />)} />
        <Route component={PageNotFound} />
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
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ).isRequired,
};

export default App;
