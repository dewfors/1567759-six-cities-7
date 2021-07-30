import React from 'react';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';
import PlaceCardNear from '../place-card/place-card-near';

function ListNearOffers(props) {
  const {offers, handleActiveOfferCard} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer, i) => <PlaceCardNear key={offer.id} offer={offer} handleActiveOfferCard={handleActiveOfferCard}/>)}
      </div>
    </section>
  );
}

ListNearOffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  handleActiveOfferCard: PropTypes.func.isRequired,
};

export default ListNearOffers;
