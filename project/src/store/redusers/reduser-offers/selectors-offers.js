import {NameSpace} from '../root-ruduser';
import {createSelector} from 'reselect';
import {getCurrentCity} from "../reduser-app/selectors-app";

const getOffers = (state) => state[NameSpace.OFFERS].offers;
const getOffersIsLoading = (state) => state[NameSpace.OFFERS].loadOffersStatus.isLoading;
const getOffersIsError = (state) => state[NameSpace.OFFERS].loadOffersStatus.isLoadError;
const getOfferDetails = (state) => state[NameSpace.OFFERS].offer;
const getOfferIsLoading = (state) => state[NameSpace.OFFERS].loadOfferStatus.isLoading;
const getOfferNearby = (state) => state[NameSpace.OFFERS].offersNearby.data;


export {
  getOffers,
  getOffersIsLoading,
  getOffersIsError,
  getOfferDetails,
  getOfferIsLoading,
  getOfferNearby,
};
