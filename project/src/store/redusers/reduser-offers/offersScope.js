import {
  loadOfferRequest,
  loadOffersError,
  loadOffersRequest,
  loadOffersSuccess,
  loadOfferSuccess,
  loadOfferError,
  loadOfferNearbyRequest,
  loadOfferNearbySuccess,
  loadOfferNearbyError, changeOffersFavorite, changeOfferFavorite
} from '../../action';
import {createReducer} from '@reduxjs/toolkit';

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

const offersScope = createReducer(initialState, ((builder) => {
  builder
    .addCase(loadOffersRequest, (state) => {
      state.loadOffersStatus.isLoading = true;
    })
    .addCase(loadOffersSuccess, (state, action) => {
      state.offers = action.payload;
      state.loadOffersStatus.isLoading = false;
      state.loadOffersStatus.isLoadSuccess = true;
    })
    .addCase(loadOffersError, (state) => {
      state.loadOffersStatus.isLoading = false;
      state.loadOffersStatus.isLoadSuccess = false;
    })
    .addCase(changeOffersFavorite, (state, action) => {
      state.offers.forEach((item, i, arr) => {
        if (item.id === action.payload.id) {
          item.isFavorite = action.payload.isFavorite;
        }
      });
    })
    .addCase(changeOfferFavorite, (state, action) => {
      state.offer.isFavorite = action.payload.isFavorite;
    })
    .addCase(loadOfferRequest, (state) => {
      state.loadOfferStatus.isLoading = true;
    })
    .addCase(loadOfferSuccess, (state, action) => {
      state.offer = action.payload;
      state.loadOfferStatus.isLoading = false;
      state.loadOfferStatus.isLoadSuccess = true;
    })
    .addCase(loadOfferError, (state) => {
      state.loadOfferStatus.isLoading = false;
      state.loadOfferStatus.isLoadSuccess = false;
    })
    .addCase(loadOfferNearbyRequest, (state) => {
      state.offersNearby.isLoading = false;
    })
    .addCase(loadOfferNearbySuccess, (state, action) => {
      state.offersNearby.data = action.payload;
      state.offersNearby.isLoading = false;
      state.offersNearby.isSuccess = true;
    })
    .addCase(loadOfferNearbyError, (state) => {
      state.offersNearby.isLoading = false;
      state.offersNearby.isSuccess = false;
      state.offersNearby.isError = true;
    });
}));


export {offersScope};
