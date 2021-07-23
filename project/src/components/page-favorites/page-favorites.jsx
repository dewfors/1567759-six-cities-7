import React, {useEffect} from 'react';
import ListOffersFavorite from '../list-offers/list-offers-favorite';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';
import Header from '../page-home/header';
import PageFavoritesListEmpty from './page-favorites-list-empty';
import Logo from '../logo/logo';
import {useDispatch, useSelector} from "react-redux";
import {getFavorites, getFavoritesIsLoading} from "../../store/redusers/reduser-favorites/selectors-favorites";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchFavorites} from "../../store/api-actions";

// function PageFavorites(props) {
function PageFavorites() {
  // const {offers} = props;

  const favoriteOffers = useSelector(getFavorites);
  const isLoading = useSelector(getFavoritesIsLoading);
  const dispatch = useDispatch();

  console.log(favoriteOffers);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);


  // const content = favoriteOffers.length ? <ListOffersFavorite offers={favoriteOffers} /> : <PageFavoritesListEmpty />;
  const content = <ListOffersFavorite offers={favoriteOffers} />;


  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {content}
        </div>
      </main>
      <footer className="footer container">
        <Logo />
      </footer>
    </div>
  );
}

// PageFavorites.propTypes = {
//   offers: PropTypes.arrayOf(
//     PropTypes.oneOfType([placeCardProp]).isRequired,
//   ).isRequired,
// };

export default PageFavorites;
