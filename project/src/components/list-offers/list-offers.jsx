import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {SortingTypes} from '../../utils/const';
import {sortByKey} from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';
import {
  getOfferIsLoading,
  getOffers
} from '../../store/reducers/reducer-offers/selectors-offers';
import {
  getCurrentCity,
  getCurrentSortType
} from '../../store/reducers/reducer-app/selectors-app';

function ListOffers(props) {
  const {handleActiveOfferCard} = props;

  const allOffers = useSelector(getOffers);
  const isLoading = useSelector(getOfferIsLoading);
  const currentCity = useSelector(getCurrentCity);

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
  handleActiveOfferCard: PropTypes.func.isRequired,
};

export default ListOffers;
