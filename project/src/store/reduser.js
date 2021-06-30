import {ActionType} from './action';
import {Settings, SortFunctions} from '../utils/const';
import {getAdaptedToClientOffers} from '../utils/utils';

const offers = getAdaptedToClientOffers();

const SORT_TYPE_DEFAULT = 'Popular';

const getCurrentOffers = (currentOffers, city, sortType) => currentOffers
  .filter((item) => item.city.name === city)
  .sort(SortFunctions[sortType]);

const initialState = {
  offers: offers,
  currentCity: Settings.DEFAULT_CITY,
  currentOffers: getCurrentOffers(offers, Settings.DEFAULT_CITY, SORT_TYPE_DEFAULT),
  currentSortType: SORT_TYPE_DEFAULT,
};

const reduser = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: getCurrentOffers(state.offers, action.payload, state.currentSortType),
      };
    case ActionType.LOAD_OFFERS_BY_CITY:
      return {
        ...state,
        currentOffers: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
        currentOffers: getCurrentOffers(state.offers, state.currentCity, action.payload),
      };
    default:
      return state;
  }
};

export {reduser};
