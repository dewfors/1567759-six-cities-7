import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

import PageMain from '../page-main/page-main';
import PageFavorites from '../page-favorites/page-favorites';
import PageNotFound from '../page-not-found/page-not-found';
import PageOffer from '../page-offer/page-offer';
import PageLogin from '../page-login/page-login';
import PropTypes from "prop-types";

const placesToStay = 515;

function App(props) {
  const {offers} = props;
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

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
      previewImage: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      title: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      isPremium: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      maxAdults: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      host: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isPro: PropTypes.bool.isRequired,
        avatarUrl: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default App;
