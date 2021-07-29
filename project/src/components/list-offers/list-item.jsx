import React from 'react';
import {Link} from 'react-router-dom';
import PlaceCardFavorite from '../place-card/place-card-favorite';
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";

function ListItem(props) {
  const {cityListOffers} = props;
  const {cityName, listOffers} = cityListOffers;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`/#${cityName}`}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {listOffers.map((offer) => <PlaceCardFavorite key={String(offer.id)} offer={offer} />)}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  cityListOffers: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    listOffers: PropTypes.arrayOf(
      PropTypes.oneOfType([placeCardProp]).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ListItem;
