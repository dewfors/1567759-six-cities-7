import {ActionType} from '../../action';

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

const reviewsScope = (state = initialState, action) => {

  switch (action.type) {
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
    default:
      return state;
  }
};

export {reviewsScope};
