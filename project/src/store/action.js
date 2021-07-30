import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_CITY: 'main/changeCity',
  SET_SORT_TYPE: 'main/changeSortType',

  LOAD_OFFERS_REQUEST: 'offers/loadRequest',
  LOAD_OFFERS_SUCCESS: 'offers/loadSuccess',
  LOAD_OFFERS_ERROR: 'offers/loadError',

  CHANGE_OFFERS_FAVORITES: 'offers/changeOffer',

  LOAD_OFFER_REQUEST: 'offer/loadRequest',
  LOAD_OFFER_SUCCESS: 'offer/loadSuccess',
  LOAD_OFFER_ERROR: 'offer/loadError',

  CHANGE_OFFER_FAVORITE: 'offer/changeOffer',

  LOAD_OFFER_NEARBY_REQUEST: 'offer-nearby/request',
  LOAD_OFFER_NEARBY_SUCCESS: 'offer-nearby/success',
  LOAD_OFFER_NEARBY_ERROR: 'offer-nearby/error',
  CHANGE_OFFER_NEARBY_FAVORITE: 'offer-nearby/changeOffer',


  LOAD_REVIEWS_REQUEST: 'review/request',
  LOAD_REVIEWS_ERROR: 'review/error',
  LOAD_REVIEWS_SUCCESS: 'review/success',


  SEND_NEW_REVIEW_REQUEST: 'review/new-review-request',
  SEND_NEW_REVIEW_ERROR: 'review/new-review-error',
  SEND_NEW_REVIEW_SUCCESS: 'review/new-review-success',


  LOAD_FAVORITES_REQUEST: 'favorites/loadRequest',
  LOAD_FAVORITES_SUCCESS: 'favorites/loadSuccess',
  LOAD_FAVORITES_ERROR: 'favorites/loadError',


  CHANGE_FAVORITES_REQUEST: 'favorites/changeRequest',
  CHANGE_FAVORITES_SUCCESS: 'favorites/changeSuccess',
  CHANGE_FAVORITES_ERROR: 'favorites/changeError',
  CHANGE_FAVORITES_LIST: 'favorites/changeList',


  LOGIN_REQUEST: 'login/request',
  LOGIN_SUCCESS: 'login/success',
  LOGIN_ERROR: 'login/error',

  LOGOUT_REQUEST: 'logout/request',
  LOGOUT_SUCCESS: 'logout/success',
  LOGOUT_ERROR: 'logout/error',
  SET_USER_INFO: 'auth/setUserInfo',

  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',

  REDIRECT_TO_BACK: 'route/redirectBack',
  REDIRECT_TO_URL: 'route/redirectUrl',

};


export const changeCity = createAction(ActionType.SET_CITY, (city) => ({
  payload: city,
}));


export const changeSortType = createAction(ActionType.SET_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));


export const loadOffersRequest = createAction(ActionType.LOAD_OFFERS_REQUEST);
export const loadOffersSuccess = createAction(ActionType.LOAD_OFFERS_SUCCESS, (offers) => ({
  payload: offers,
}));
export const loadOffersError = createAction(ActionType.LOAD_OFFERS_ERROR);

export const changeOffersFavorite = createAction(ActionType.CHANGE_OFFERS_FAVORITES, (offer) => ({
  payload: offer,
}));
export const changeOffersNearbyFavorite = createAction(ActionType.CHANGE_OFFER_NEARBY_FAVORITE, (offer) => ({
  payload: offer,
}));
export const changeOfferFavorite = createAction(ActionType.CHANGE_OFFER_FAVORITE, (offer) => ({
  payload: offer,
}));


export const loadOfferRequest = createAction(ActionType.LOAD_OFFER_REQUEST);
export const loadOfferSuccess = createAction(ActionType.LOAD_OFFER_SUCCESS, (offer) => ({
  payload: offer,
}));
export const loadOfferError = createAction(ActionType.LOAD_OFFER_ERROR);


export const loadOfferNearbyRequest = createAction(ActionType.LOAD_OFFER_NEARBY_REQUEST);
export const loadOfferNearbySuccess = createAction(ActionType.LOAD_OFFER_NEARBY_SUCCESS, (offers) => ({
  payload: offers,
}));
export const loadOfferNearbyError = createAction(ActionType.LOAD_OFFER_NEARBY_ERROR);


export const loadReviewRequest = createAction(ActionType.LOAD_REVIEWS_REQUEST);
export const loadReviewSuccess = createAction(ActionType.LOAD_REVIEWS_SUCCESS, (reviews) => ({
  payload: reviews,
}));
export const loadReviewError = createAction(ActionType.LOAD_REVIEWS_ERROR);


export const sendNewReviewRequest = createAction(ActionType.SEND_NEW_REVIEW_REQUEST);
export const sendNewReviewSuccess = createAction(ActionType.SEND_NEW_REVIEW_SUCCESS, (reviews) => ({
  payload: reviews,
}));
export const sendNewReviewError = createAction(ActionType.SEND_NEW_REVIEW_ERROR);


export const loginRequest = createAction(ActionType.LOGIN_REQUEST);
export const loginSuccess = createAction(ActionType.LOGIN_SUCCESS);
export const loginError = createAction(ActionType.LOGIN_ERROR);


export const logoutRequest = createAction(ActionType.LOGOUT_REQUEST);
export const logoutSuccess = createAction(ActionType.LOGOUT_SUCCESS);
export const logoutError = createAction(ActionType.LOGOUT_ERROR);
export const logout = createAction(ActionType.LOGOUT);


export const setAuthUserData = createAction(ActionType.SET_USER_INFO, (userInfo) => ({
  payload: userInfo,
}));
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));


export const redirectToBack = createAction(ActionType.REDIRECT_TO_BACK);
export const redirectToUrl = createAction(ActionType.REDIRECT_TO_URL, (url) => ({
  payload: url,
}));


export const loadFavoritesRequest = createAction(ActionType.LOAD_FAVORITES_REQUEST);
export const loadFavoritesSuccess = createAction(ActionType.LOAD_FAVORITES_SUCCESS, (favoritesOffers) => ({
  payload: favoritesOffers,
}));
export const loadFavoritesError = createAction(ActionType.LOAD_FAVORITES_ERROR);


export const changeFavoritesRequest = createAction(ActionType.CHANGE_FAVORITES_REQUEST);
export const changeFavoritesSuccess = createAction(ActionType.CHANGE_FAVORITES_SUCCESS, (favoriteOffer) => ({
  payload: favoriteOffer,
}));
export const changeFavoritesError = createAction(ActionType.CHANGE_FAVORITES_ERROR);

export const changeFavoritesList = createAction(ActionType.CHANGE_FAVORITES_LIST, (favoriteOffer) => ({
  payload: favoriteOffer,
}));


