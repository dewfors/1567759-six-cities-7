import {ActionType} from './action';
import {Settings} from '../utils/const';
import {getAdaptedToClientOffers} from '../utils/utils';

const offers = getAdaptedToClientOffers();

const SORT_TYPE_DEFAULT = 'Popular';

const initialState = {
  offers: offers,
  currentCity: Settings.DEFAULT_CITY,
  currentSortType: SORT_TYPE_DEFAULT,
};

const reduser = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };
    default:
      return state;
  }
};

export {reduser};
