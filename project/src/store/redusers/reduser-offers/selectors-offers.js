import {NameSpace} from '../root-ruduser';
import {createSelector} from 'reselect';
import {getCurrentCity} from "../reduser-app/selectors-app";

const getOffers = (state) => state[NameSpace.OFFERS].offers;
const getOffersIsLoading = (state) => state[NameSpace.OFFERS].loadOffersStatus.isLoading;
const getOffersIsError = (state) => state[NameSpace.OFFERS].loadOffersStatus.isLoadError;


export {
  getOffers,
  getOffersIsLoading,
  getOffersIsError,
};
