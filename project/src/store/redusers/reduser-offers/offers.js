import {ActionType} from '../../action';

const initialState = {
  offers: [],
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
  offersNearby: {
    data: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
  },

};

const offers = (state = initialState, action) => {

  switch (action.type) {
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


    default:
      return state;
  }

};

export {offers};
