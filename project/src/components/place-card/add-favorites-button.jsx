import React from 'react';
import {useRouteMatch, useParams} from 'react-router';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import PropTypes from 'prop-types';
import {getIsAuth} from '../../store/reducers/reducer-user/selectors-user';
import {AppRoute} from '../../utils/const';
import browserHistory from '../../utils/browser-history';
import {fetchChangeFavoriteStatus} from '../../store/api-actions';


function AddFavoritesButton({ isFavorite, id }) {

  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const {path} = useRouteMatch();
  const params = useParams();

  const width = (path === AppRoute.OFFER && id === Number(params.id)) ? 31 : 18;
  const height = (path === AppRoute.OFFER && id === Number(params.id)) ? 33 : 19;

  const addToFavoritesClassName = (path === AppRoute.OFFER && id === Number(params.id))
    ? 'property__bookmark-button button'
    : 'place-card__bookmark-button button';
  const addToFavoritesActiveClassName = isFavorite ? 'place-card__bookmark-button--active' : '';

  const handleAddToFavorites = () => {
    if (!isAuth) {
      browserHistory.push(AppRoute.LOGIN);
      return;
    }
    dispatch(fetchChangeFavoriteStatus({id, status: Number(!isFavorite), path}));
  };


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
  );

}

AddFavoritesButton.defaultProps = {
  isFavorite: false,
};

AddFavoritesButton.propTypes = {
  isFavorite: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

export default AddFavoritesButton;

