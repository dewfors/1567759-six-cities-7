import React from 'react';
import ListOffersFavorite from '../list-offers/list-offers-favorite';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';
import Header from "../page-home/header";

function PageFavorites(props) {
  const {offers} = props;
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <ListOffersFavorite offers={offers} />
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
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
