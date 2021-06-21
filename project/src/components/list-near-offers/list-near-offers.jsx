import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';

function ListNearOffers(props) {
  const {offers} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer, i) => <PlaceCard key={offer.id} offer={offer}/>)}
      </div>
    </section>
  );
}

ListNearOffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
};

export default ListNearOffers;
