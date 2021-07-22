import {
  loadOfferError,
  loadOfferNearbyError,
  loadOfferNearbyRequest,
  loadOfferNearbySuccess,
  loadOfferRequest,
  loadOffersError,
  loadOffersRequest,
  loadOffersSuccess,
  loadOfferSuccess, loadReviewError,
  loadReviewRequest, loadReviewSuccess,
  loginError,
  loginRequest,
  loginSuccess, logoutError, logoutRequest, logoutSuccess,
  redirectToBack,
  redirectToUrl,
  requireAuthorization, sendNewReviewError, sendNewReviewRequest, sendNewReviewSuccess,
  setAuthUserData
} from './action';
import {AppRoute, AuthorizationStatus} from '../utils/const';
import {getAdaptedToClientObject} from '../utils/utils';

export const fetchHotels = () => (dispatch, store, api) => {
  dispatch(loadOffersRequest());
  api.get(AppRoute.HOTELS)
    .then(({ data }) => {
      const offers = data.map(getAdaptedToClientObject);
      dispatch(loadOffersSuccess(offers));
    })
    .catch(() => { dispatch(loadOffersError()); });
};

export const checkAuth = () => (dispatch, store, api) => {
  api.get(AppRoute.LOGIN)
    .then(({ data }) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      const userData = getAdaptedToClientObject(data);
      dispatch(setAuthUserData(userData));
    })
    .catch(() => {
      dispatch(setAuthUserData({}));
    });
};

export const fetchLogin = (fetchLoginData) => (dispatch, store, api) => {
  dispatch(loginRequest());
  api.post(AppRoute.LOGIN, fetchLoginData)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      const userData = getAdaptedToClientObject(data);
      dispatch(setAuthUserData(userData));
      dispatch(loginSuccess());
      dispatch(redirectToBack());
    })
    .catch((e) => {
      dispatch(loginError());
    });
};

export const fetchLogout = () => (dispatch, _store, api) => {
  dispatch(logoutRequest());
  api.delete(AppRoute.LOGOUT)
    .then(() => {
      dispatch(logoutSuccess());
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .then(() => { dispatch(redirectToUrl(AppRoute.ROOT)); })
    .catch(() => dispatch(logoutError()));
};

export const fetchOfferDetails = (id) => (dispatch, _store, api) => {
  dispatch(loadOfferRequest());
  api.get(`${AppRoute.HOTELS}/${id}`)
    .then(({ data }) => {
      const offer = getAdaptedToClientObject(data);
      dispatch(loadOfferSuccess(offer));
    })
    .catch(() => {
      dispatch(loadOfferError());
      dispatch(redirectToUrl(AppRoute.NOT_FOUND));
    });
};


export const fetchNearbyOffers = (id) => (dispatch, _store, api) => {
  dispatch(loadOfferNearbyRequest());
  api.get(`${AppRoute.HOTELS}/${id}${AppRoute.NEARBY}`)
    .then(({ data }) => {
      const offers = data.map(getAdaptedToClientObject);
      dispatch(loadOfferNearbySuccess(offers));
    })
    .catch(() => dispatch(loadOfferNearbyError()));
};

export const fetchReviews = (id) => (dispatch, _store, api) => {
  dispatch(loadReviewRequest());
  api.get(`${AppRoute.COMMENTS}/${id}`)
    .then(({ data }) => {
      const reviews = data.map(getAdaptedToClientObject);
      dispatch(loadReviewSuccess(reviews));
    })
    .catch(() => dispatch(loadReviewError()));
};

export const sendNewReview = (id, newComment) => (dispatch, _store, api) => {
  dispatch(sendNewReviewRequest());
  api.post(`${AppRoute.COMMENTS}/${id}`, newComment)
    .then(({ data }) => {
      const reviews = data.map(getAdaptedToClientObject);
      dispatch(sendNewReviewSuccess(reviews));
    })
    .catch(() => dispatch(sendNewReviewError()));
};

