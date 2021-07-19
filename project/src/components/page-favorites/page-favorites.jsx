import React from 'react';
import ListOffersFavorite from '../list-offers/list-offers-favorite';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';
import Header from '../page-home/header';
import PageFavoritesListEmpty from './page-favorites-list-empty';
import Logo from '../logo/logo';

function PageFavorites(props) {
  const {offers} = props;
  const content = offers.length ? <ListOffersFavorite offers={offers} /> : <PageFavoritesListEmpty />;

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

PageFavorites.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
};

export default PageFavorites;
