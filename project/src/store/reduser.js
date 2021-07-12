import {ActionType} from './action';
import {AuthorizationStatus, Settings} from '../utils/const';
import {getAdaptedToClientOffers} from '../utils/utils';

const offers = getAdaptedToClientOffers();

const SORT_TYPE_DEFAULT = 'Popular';

const initialState = {
  offers: [],
  currentCity: Settings.DEFAULT_CITY,
  currentSortType: SORT_TYPE_DEFAULT,
  loadOffersStatus: {
    isLoadError: false,
    isLoading: false,
    isLoadSuccess: false,
  },
  AuthorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
};

const reduser = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };


    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };


    case ActionType.LOAD_OFFERS_REQUEST:
      return {
        ...state,
        loadOffersStatus: { ...state.loadOffersStatus, isLoading: true },
      };
    case ActionType.LOAD_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload,
        loadOffersStatus: { ...state.loadOffersStatus, isLoading: false, isLoadSuccess: true },
      };
    case ActionType.LOAD_OFFERS_ERROR:
      return {
        ...state,
        loadOffersStatus: { ...state.loadOffersStatus, isLoading: false, isLoadSuccess: false },
      };


    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        AuthorizationStatus: action.payload,
      };


    case ActionType.LOGOUT:
      return {
        ...state,
        AuthorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reduser};
