import {ActionCreator} from "./action";
import {AppRoute, AuthorizationStatus} from "../utils/const";
import {getAdaptedToClientObject} from "../utils/utils";


export const fetchHotels = () => (dispatch, store, api) => {
  dispatch(ActionCreator.loadOffersRequest());
  api.get(AppRoute.HOSTELS)
    .then(({ data }) => {
      const offers = data.map(getAdaptedToClientObject);
      dispatch(ActionCreator.loadOffersSuccess(offers));
    })
    .catch(() => { dispatch(ActionCreator.loadOffersError()); });
};

export const checkAuth = () => (dispatch, store, api) => {
  api.get(AppRoute.LOGIN)
    .then(({ data }) => {
      console.log(data);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthUserData(data));
    })
    .catch(() => {
      console.log();
      dispatch(ActionCreator.setAuthUserData({}));
    });
};

