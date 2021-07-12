import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';
import {SortingTypes} from '../../utils/const';
import {sortByKey} from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';

function ListOffers(props) {
  const {offers, isLoading, handleActiveOfferCard} = props;


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

// const mapStateToProps = ({offers: allOffers, currentCity, currentSortType}) => {
const mapStateToProps = (state) => {

  const allOffers = state.offers;
  const currentCity = state.currentCity;
  const currentSortType = state.currentSortType;
  const isLoading = state.loadOffersStatus.isLoading;

  const filterdOffers = allOffers.filter((item) => item.city.name === currentCity);

  // console.log(currentCity);
  // console.log(filterdOffers);

  const currentSort = Object.values(SortingTypes).find((item) => item.sortType === currentSortType);
  const offers = sortByKey(filterdOffers, currentSort.sortKey, currentSort.sortDirection);

  return {offers, isLoading};
};

export {ListOffers};
export default connect(mapStateToProps)(ListOffers);
