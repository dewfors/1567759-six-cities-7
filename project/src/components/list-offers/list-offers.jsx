import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';

function ListOffers(props) {
  const {offers, handleActiveOfferCard} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard key={offer.id} offer={offer} handleActiveOfferCard={handleActiveOfferCard}/>)}
    </div>
  );
}

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  handleActiveOfferCard: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  offers: state.currentOffers,
});

export {ListOffers};
export default connect(stateToProps)(ListOffers);
