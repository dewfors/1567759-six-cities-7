import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import {Link} from 'react-router-dom';

function UserNavigation(props) {

  const {authorizationStatus, userInfo} = props;

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  // const userNameClass = isAuth
  //   ? 'header__user-name user__name'
  //   : 'header__login';

  const handleLogoutClick = (evt) => {
    evt.preventDefault();

  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            to={isAuth ? AppRoute.FAVORITES : AppRoute.LOGIN}
            className="header__nav-link header__nav-link--profile"
            href="/#"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span
              className="header__user-name user__name"
            >
              {`${isAuth ? `${userInfo.email}` : 'Sign in'}`}
            </span>
          </Link>
        </li>

        {isAuth && (
          <li className="header__nav-item">
            <a className="header__nav-link" href="/#" onClick={handleLogoutClick}>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

UserNavigation.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
    token: PropTypes.string,
  }),
};


const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userInfo: state.userInfo,
});


export {UserNavigation};

export default connect(mapStateToProps)(UserNavigation);

