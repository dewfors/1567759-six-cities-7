import React from 'react';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';
import ListItem from './list-item';

const getListOffers = (offers) => {
  const cities = new Set(offers.map((card) => card.city.name));
  return [...cities].map((city) => ({cityName: city, listOffers: offers.filter((item) => item.city.name === city)}));
};

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


export default ListOffersFavorite;
