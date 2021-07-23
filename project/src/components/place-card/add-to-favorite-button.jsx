import React from 'react';
import {useRouteMatch} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {getAuthorizationStatus} from "../../store/redusers/reduser-user/selectors-user";
import {AppRoute, AuthorizationStatus} from "../../utils/const";
import browserHistory from "../../utils/browser-history";
import {fetchChangeFavoriteStatus} from "../../store/api-actions";


function AddFavoritesButton({ isFavorite, id }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const dispatch = useDispatch();
  const {path} = useRouteMatch();

  console.log();

  const width = path === AppRoute.OFFER ? 31 : 18;
  const height = path === AppRoute.OFFER ? 33 : 19;

  const addToFavoritesClassName = path === AppRoute.OFFER
    ? 'property__bookmark-button button'
    : 'place-card__bookmark-button button';
  const addToFavoritesActiveClassName = isFavorite ? 'place-card__bookmark-button--active' : '';

  const handleAddToFavorites = () => {
    console.log(isAuth);
    if (!isAuth) {
      browserHistory.push(AppRoute.LOGIN);
      return;
    }
    dispatch(fetchChangeFavoriteStatus({id, status: Number(!isFavorite), path}));
  }


  return (
    <button
      className={`${addToFavoritesClassName} ${addToFavoritesActiveClassName}`}
      type="button"
      onClick={handleAddToFavorites}
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"> </use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  )

}

export default AddFavoritesButton;
