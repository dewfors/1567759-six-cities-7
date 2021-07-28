import React from 'react';
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';
import {SortingTypes} from '../../utils/const';
import {sortByKey} from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';
import {getOfferIsLoading, getOffers} from "../../store/redusers/reduser-offers/selectors-offers";
import {getCurrentCity, getCurrentSortType} from "../../store/redusers/reduser-app/selectors-app";

function ListOffers(props) {
  const {handleActiveOfferCard} = props;

  const allOffers = useSelector(getOffers);
  const isLoading = useSelector(getOfferIsLoading);
  // const currentCity = appSpace.currentCity;
  const currentCity = useSelector(getCurrentCity);

  // const currentSortType = appSpace.currentSortType;
  const currentSortType = useSelector(getCurrentSortType);

  const filterdOffers = allOffers.filter((item) => item.city.name === currentCity);

  const currentSort = Object.values(SortingTypes).find((item) => item.sortType === currentSortType);
  const offers = sortByKey(filterdOffers, currentSort.sortKey, currentSort.sortDirection);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => <PlaceCard key={offer.id} offer={offer} handleActiveOfferCard={handleActiveOfferCard}/>)}
    </div>
  );
}

ListOffers.propTypes = {
  // offers: PropTypes.arrayOf(
  //   PropTypes.oneOfType([placeCardProp]).isRequired,
  // ).isRequired,
  handleActiveOfferCard: PropTypes.func.isRequired,
  // isLoading: PropTypes.bool.isRequired,
};

// const mapStateToProps = (state) => {
const mapStateToProps = ({appSpace, offersSpace}) => {

  const allOffers = offersSpace.offers;
  const currentCity = appSpace.currentCity;
  const currentSortType = appSpace.currentSortType;
  const isLoading = offersSpace.loadOffersStatus.isLoading;

  const filterdOffers = allOffers.filter((item) => item.city.name === currentCity);

  const currentSort = Object.values(SortingTypes).find((item) => item.sortType === currentSortType);
  const offers = sortByKey(filterdOffers, currentSort.sortKey, currentSort.sortDirection);

  return {offers, isLoading};
};


export default ListOffers;
