import React from 'react';
import PlaceCard from "../place-card/place-card";
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import PageMain from "../page-main/page-main";

function ListOffers(props) {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard key={offer.id} offer={offer}/>)}
    </div>
  )
}

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
};

export default ListOffers;
