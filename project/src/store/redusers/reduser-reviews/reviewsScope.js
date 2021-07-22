import {
  loadReviewError,
  loadReviewRequest,
  loadReviewSuccess,
  sendNewReviewError,
  sendNewReviewRequest,
  sendNewReviewSuccess
} from '../../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
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

const reviewsScope = createReducer(initialState, ((builder) => {
  builder
    .addCase(loadReviewRequest, (state, action) => {
      state.reviewsStatus.isLoading = true;
    })
    .addCase(loadReviewSuccess, (state, action) => {
      state.reviewsStatus.isLoading = false;
      state.reviewsStatus.isSuccess = true;
      state.reviews = action.payload;
    })
    .addCase(loadReviewError, (state, action) => {
      state.reviewsStatus.isLoading = false;
      state.reviewsStatus.isError = true;
      state.reviews = [];
    })
    .addCase(sendNewReviewRequest, (state, action) => {
      state.sendNewReviewStatus.isLoading = true;
    })
    .addCase(sendNewReviewSuccess, (state, action) => {
      state.sendNewReviewStatus.isLoading = false;
      state.sendNewReviewStatus.isSuccess = true;
      state.reviews = action.payload;
    })
    .addCase(sendNewReviewError, (state, action) => {
      state.sendNewReviewStatus.isLoading = false;
      state.sendNewReviewStatus.isError = true;
    });
}));

export {reviewsScope};
