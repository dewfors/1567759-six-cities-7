import React, {useEffect} from 'react';
import ListOffersFavorite from '../list-offers/list-offers-favorite';
import Header from '../page-home/header';
import Logo from '../logo/logo';
import {useDispatch, useSelector} from 'react-redux';
import {getFavorites, getFavoritesIsLoading} from '../../store/redusers/reduser-favorites/selectors-favorites';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFavorites} from '../../store/api-actions';

function PageFavorites() {

  const favoriteOffers = useSelector(getFavorites);
  const isLoading = useSelector(getFavoritesIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const content = <ListOffersFavorite offers={favoriteOffers} />;

  if (isLoading) {
    return <LoadingScreen />;
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

export default PageFavorites;
