import {ActionType} from '../../action';
import {reviewsScope} from './reviewsScope';


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

const reviews = [
  {
    'id': 1,
    'user': {
      'id': 16,
      'isPro': true,
      'name': 'Mollie',
      'avatarUrl': 'https://7.react.pages.academy/static/avatar/7.jpg',
    },
    'rating': 3,
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': '2021-04-01T17:54:41.603Z',
  },
  {
    'id': 2,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Zak',
      'avatarUrl': 'https://7.react.pages.academy/static/avatar/4.jpg',
    },
    'rating': 3,
    'comment': 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    'date': '2021-05-02T17:54:41.603Z',
  },
];

describe('Reducer: reviewsScope', () => {
  it('без параметров должен вернуть начальный стейт', () => {
    expect(reviewsScope(undefined, {}))
      .toEqual(initialState);
  });

  it('loadReviewRequest', () => {
    const action = {type: ActionType.LOAD_REVIEWS_REQUEST};
    expect(reviewsScope(initialState, action))
      .toEqual({...initialState, reviewsStatus: {...initialState.reviewsStatus, isLoading: true}});
  });

  it('loadReviewSuccess', () => {
    const action = {type: ActionType.LOAD_REVIEWS_SUCCESS, payload: reviews};
    expect(reviewsScope(initialState, action))
      .toEqual({
        ...initialState,
        reviews: reviews,
        reviewsStatus: {
          ...initialState.reviewsStatus,
          isLoading: false,
          isSuccess: true,
        },
      });
  });

  it('loadReviewError', () => {
    const action = {type: ActionType.LOAD_REVIEWS_ERROR};
    expect(reviewsScope(initialState, action))
      .toEqual({
        ...initialState,
        reviewsStatus: {
          ...initialState.reviewsStatus,
          isLoading: false,
          isSuccess: false,
          isError: true,
        },
      });
  });


  it('sendNewReviewRequest', () => {
    const action = {type: ActionType.SEND_NEW_REVIEW_REQUEST};
    expect(reviewsScope(initialState, action))
      .toEqual({...initialState, sendNewReviewStatus: {...initialState.sendNewReviewStatus, isLoading: true}});
  });

  it('sendNewReviewSuccess', () => {
    const action = {type: ActionType.SEND_NEW_REVIEW_SUCCESS, payload: reviews};
    expect(reviewsScope(initialState, action))
      .toEqual({
        ...initialState,
        reviews: reviews,
        sendNewReviewStatus: {
          ...initialState.sendNewReviewStatus,
          isLoading: false,
          isSuccess: true,
        },
      });
  });

  it('sendNewReviewError', () => {
    const action = {type: ActionType.SEND_NEW_REVIEW_ERROR};
    expect(reviewsScope(initialState, action))
      .toEqual({
        ...initialState,
        sendNewReviewStatus: {
          ...initialState.sendNewReviewStatus,
          isLoading: false,
          isSuccess: false,
          isError: true,
        },
      });
  });

});

