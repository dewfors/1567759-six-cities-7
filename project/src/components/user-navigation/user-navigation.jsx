import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  AppRoute,
  AuthorizationStatus
} from '../../utils/const';
import {Link} from 'react-router-dom';
import {fetchLogout} from '../../store/api-actions';
import {getAuthorizationStatus, getUserInfoStatus} from '../../store/redusers/reduser-user/selectors-user';

function UserNavigation(props) {

  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userInfo = useSelector(getUserInfoStatus);

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  const logout = () => {
    dispatch(fetchLogout());
  };

  const userNameClass = isAuth
    ? 'header__user-name user__name'
    : 'header__login';
  const avatarStyle = isAuth ? {
    backgroundImage: `url(${userInfo?.avatarUrl})`,
  } : {};

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    logout();
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
            <div className="header__avatar-wrapper user__avatar-wrapper" style={avatarStyle}>
            </div>
            <span
              className={userNameClass}
            >
              {`${isAuth ? `${userInfo.email}` : 'Sign in'}`}
            </span>
          </Link>
        </li>

        {isAuth && (
          <li className="header__nav-item">
            <Link
              to={isAuth ? AppRoute.FAVORITES : AppRoute.LOGIN}
              className="header__nav-link"
              href="/#"
              onClick={handleLogoutClick}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default UserNavigation;
