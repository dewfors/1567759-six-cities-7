import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import {getAuthorizationStatus} from "../../store/redusers/reduser-user/selectors-user";

function PrivateRoute({exact, path, render, authorizationStatus}) {

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
  authorizationStatus: PropTypes.string,
  render: PropTypes.func.isRequired,
};

// const mapStateToProps = ({userSpace}) => ({
const mapStateToProps = (state) => ({
  // authorizationStatus: userSpace.authorizationStatus,
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
