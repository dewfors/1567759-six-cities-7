import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';
import {SortingTypes} from '../../utils/const';
import {sortByKey} from '../../utils/utils';

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

const mapStateToProps = ({offers: allOffers, currentCity, currentSortType}) => {
  const filterdOffers = allOffers.filter((item) => item.city.name === currentCity);
  const currentSort = Object.values(SortingTypes).find((item) => item.sortType === currentSortType);
  const offers = sortByKey(filterdOffers, currentSort.sortKey, currentSort.sortDirection);

  return { offers };
};

export {ListOffers};
export default connect(mapStateToProps)(ListOffers);
