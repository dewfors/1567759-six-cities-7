import React from 'react';
import PlaceCardFavorite from '../place-card/place-card-favorite';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';

const getListOffers = (offers) => {
  const cities = new Set(offers.map((card) => card.city.name));
  return [...cities].map((city) => ({cityName: city, listOffers: offers.filter((item) => item.city.name === city)}));
};

function ListItem(props) {
  const {cityListOffers} = props;
  const {cityName, listOffers} = cityListOffers;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {listOffers.map((offer) => <PlaceCardFavorite key={String(offer.id)} offer={offer} />)}
      </div>
    </li>
  );
}

function ListOffersFavorite(props) {
  const {offers} = props;
  const listCityOffers = getListOffers(offers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {listCityOffers.map((cityListOffers) => <ListItem key={cityListOffers.cityName} cityListOffers={cityListOffers} />)}
      </ul>
    </section>
  );
}

ListOffersFavorite.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
};

ListItem.propTypes = {
  cityListOffers: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    listOffers: PropTypes.arrayOf(
      PropTypes.oneOfType([placeCardProp]).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ListOffersFavorite;