import React from 'react';
import {useSelector} from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
  Router
} from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus
} from '../../utils/const';
import PageHome from '../page-home/page-home';
import PageFavorites from '../page-favorites/page-favorites';
import PageNotFound from '../page-not-found/page-not-found';
import PageOffer from '../page-offer/page-offer';
import PageLogin from '../page-login/page-login';
import PrivateRoute from '../private-route/private-route';
import {getAuthorizationStatus} from '../../store/redusers/reduser-user/selectors-user';
import browserHistory from '../../utils/browser-history';


function App() {

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

export default App;
