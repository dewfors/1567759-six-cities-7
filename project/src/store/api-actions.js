import {ActionCreator} from './action';
import {AppRoute, AuthorizationStatus} from '../utils/const';
import {getAdaptedToClientObject} from '../utils/utils';


export const fetchHotels = () => (dispatch, store, api) => {
  dispatch(ActionCreator.loadOffersRequest());
  api.get(AppRoute.HOTELS)
    .then(({ data }) => {
      const offers = data.map(getAdaptedToClientObject);
      dispatch(ActionCreator.loadOffersSuccess(offers));
    })
    .catch(() => { dispatch(ActionCreator.loadOffersError()); });
};

export const checkAuth = () => (dispatch, store, api) => {
  api.get(AppRoute.LOGIN)
    .then(({ data }) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthUserData(data));
    })
    .catch(() => {
      dispatch(ActionCreator.setAuthUserData({}));
    });
};

export const fetchLogin = (fetchLoginData) => (dispatch, store, api) => {
  dispatch(ActionCreator.loginRequest());
  api.post(AppRoute.LOGIN, fetchLoginData)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthUserData(data));
      dispatch(ActionCreator.loginSuccess());
      dispatch(ActionCreator.redirectToBack());
    })
    .catch((e) => {
      dispatch(ActionCreator.loginError());
    });
};

export const fetchLogout = () => (dispatch, _store, api) => {
  dispatch(ActionCreator.logoutRequest());
  api.delete(AppRoute.LOGOUT)
    .then(() => {
      dispatch(ActionCreator.logoutSuccess());
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .then(() => { dispatch(ActionCreator.redirectToUrl(AppRoute.ROOT)); })
    .catch(() => dispatch(ActionCreator.logoutError()));
};

export const fetchOfferDetails = (id) => (dispatch, _store, api) => {
  dispatch(ActionCreator.loadOfferRequest());
  api.get(`${AppRoute.HOTELS}/${id}`)
    .then(({ data }) => {
      const offer = getAdaptedToClientObject(data);
      dispatch(ActionCreator.loadOfferSuccess(offer));
    })
    .catch(() => {
      dispatch(ActionCreator.loadOfferError());
      // dispatch(ActionCreator.redirectToUrl(AppRoute.NOT_FOUND))
      dispatch(ActionCreator.redirectToUrl(AppRoute.ROOT))
    });
};


export const fetchNearbyOffers = (id) => (dispatch, _store, api) => {
  dispatch(ActionCreator.loadOfferNearbyRequest());
  api.get(`${AppRoute.HOTELS}/${id}${AppRoute.NEARBY}`)
    .then(({ data }) => {
      const offers = data.map(getAdaptedToClientObject);
      dispatch(ActionCreator.loadOfferNearbySuccess(offers));
    })
    .catch(() => ActionCreator.loadOfferNearbyError());
};

