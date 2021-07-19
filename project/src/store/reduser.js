import {ActionType} from './action';
import {AuthorizationStatus, Settings} from '../utils/const';

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

  offer: {},
  loadOfferStatus: {
    isLoadError: false,
    isLoading: false,
    isLoadSuccess: false,
  },

  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
  loginStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },

  logoutStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },

  offersNearby: {
    data: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
  },


  reviews: [],
  reviewsStatus: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },

  sendNewReviewStatus: {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },

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


    case ActionType.LOAD_OFFER_REQUEST:
      return {
        ...state,
        loadOfferStatus: { ...state.loadOfferStatus, isLoading: true },
      };
    case ActionType.LOAD_OFFER_SUCCESS:
      return {
        ...state,
        offer: action.payload,
        loadOfferStatus: { ...state.loadOfferStatus, isLoading: false, isLoadSuccess: true },
      };
    case ActionType.LOAD_OFFER_ERROR:
      return {
        ...state,
        loadOfferStatus: { ...state.loadOfferStatus, isLoading: false, isLoadSuccess: false },
      };


    case ActionType.LOAD_REVIEWS_REQUEST:
      return {
        ...state,
        reviewsStatus: { ...state.reviewsStatus, isLoading: true },
      };
    case ActionType.LOAD_REVIEWS_SUCCESS:
      return {
        ...state,
        reviewsStatus: { ...state.reviewsStatus, isLoading: true },
        reviews: action.payload,
      };
    case ActionType.LOAD_REVIEWS_ERROR:
      return {
        ...state,
        reviewsStatus: { ...state.reviewsStatus, isLoading: false, isError: true },
      };


    case ActionType.SEND_NEW_REVIEW_REQUEST:
      return {
        ...state,
        sendNewReviewStatus: { ...state.sendNewReviewStatus, isLoading: true },
      };
    case ActionType.SEND_NEW_REVIEW_SUCCESS:
      return {
        ...state,
        sendNewReviewStatus: { ...state.sendNewReviewStatus, isLoading: false, isSuccess: true },
        reviews: action.payload,
      };
    case ActionType.SEND_NEW_REVIEW_ERROR:
      return {
        ...state,
        sendNewReviewStatus: { ...state.sendNewReviewStatus, isLoading: false, isError: true },
      };


    case ActionType.LOAD_OFFER_NEARBY_REQUEST:
      return {
        ...state,
        offersNearby: { ...state.offersNearby, isLoading: true },
      };
    case ActionType.LOAD_OFFER_NEARBY_SUCCESS:
      return {
        ...state,
        offersNearby: { ...state.offersNearby, data: action.payload, isLoading: false, isSuccess: true },
      };
    case ActionType.LOAD_OFFER_NEARBY_ERROR:
      return {
        ...state,
        offersNearby: { ...state.offersNearby, data: [], isLoading: false, isSuccess: false, isError: true },
      };


    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };


    case ActionType.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: true },
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: false, isSuccess: true },
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: false, isError: true },
      };

    case ActionType.LOGOUT_REQUEST:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: true },
      };
    case ActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: false, isSuccess: true },
      };
    case ActionType.LOGOUT_ERROR:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: false, isError: true },
      };


    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reduser};
