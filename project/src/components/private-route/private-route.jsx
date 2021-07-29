import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus
} from '../../utils/const';
import {getAuthorizationStatus} from '../../store/redusers/reduser-user/selectors-user';

function PrivateRoute({exact, path, render}) {

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routerProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routerProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
