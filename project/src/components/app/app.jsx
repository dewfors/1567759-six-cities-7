import React from 'react';
import {connect, useSelector} from 'react-redux';
import {Switch, Route, Redirect, Router} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import PageHome from '../page-home/page-home';
import PageFavorites from '../page-favorites/page-favorites';
import PageNotFound from '../page-not-found/page-not-found';
import PageOffer from '../page-offer/page-offer';
import PageLogin from '../page-login/page-login';
import PrivateRoute from '../private-route/private-route';
import placeCardProp from '../place-card/place-card.prop';
import reviewProp from '../reviews/review.prop';
import {getOffers} from '../../store/redusers/reduser-offers/selectors-offers';
import {getAuthorizationStatus} from '../../store/redusers/reduser-user/selectors-user';
import browserHistory from '../../utils/browser-history';


function App(props) {
  // const {comments, city, cityList} = props;

  // const offers = useSelector(getOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);


  return (
    <Router history={browserHistory}>
      <Switch>
        {/*<Route exact path = {AppRoute.ROOT} render={((routerProps) => <PageHome {...routerProps} cityList={cityList} />)} />*/}
        <Route exact path = {AppRoute.ROOT} render={((routerProps) => <PageHome {...routerProps} />)} />
        <PrivateRoute exact path = {AppRoute.FAVORITES} render={((routerProps) => <PageFavorites {...routerProps} />)} />
        <Route exact path={AppRoute.LOGIN}>
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={AppRoute.ROOT} />
            : <PageLogin />}
        </Route>
        {/*<Route exact path = {AppRoute.OFFER} render={((routerProps) => <PageOffer {...routerProps} offers={offers} city={city} comments={comments} />)} />*/}
        <Route exact path = {AppRoute.OFFER} render={((routerProps) => <PageOffer {...routerProps} />)} />

        <Route exact path = {AppRoute.NOT_FOUND} render={((routerProps) => <PageNotFound {...routerProps} />)} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>

  );
}

// App.propTypes = {
//   // offers: PropTypes.arrayOf(
//   //   PropTypes.oneOfType([placeCardProp]).isRequired,
//   // ).isRequired,
//   // city: PropTypes.shape({
//   //   title: PropTypes.string.isRequired,
//   //   lat: PropTypes.number.isRequired,
//   //   lng: PropTypes.number.isRequired,
//   //   zoom: PropTypes.number.isRequired,
//   // }).isRequired,
//   // comments: PropTypes.arrayOf(
//   //   PropTypes.oneOfType([reviewProp]).isRequired,
//   // ).isRequired,
//   // cityList: PropTypes.arrayOf(
//   //   PropTypes.string.isRequired,
//   // ).isRequired,
//   // authorizationStatus: PropTypes.string.isRequired,
// };

export default App;
