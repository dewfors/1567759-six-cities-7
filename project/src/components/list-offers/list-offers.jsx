// import {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';

function ListOffers(props) {
  // const [activeOffer, setActiveOffer] = useState(0);
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard key={offer.id} offer={offer}/>)}
    </div>
  );
}

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
};

export default ListOffers;
