import {ActionCreator} from "./action";
import {AppRoute} from "../utils/const";
import {getAdaptedToClientObject} from "../utils/utils";


export const fetchHotels = () => (dispatch, store, api) => {
  dispatch(ActionCreator.loadOffersRequest());
  api.get(AppRoute.HOSTELS)
    .then(({ data }) => {

      // console.log(data);
      const offers = data.map(getAdaptedToClientObject);
      // console.log(offers);
      dispatch(ActionCreator.loadOffersSuccess(offers));
    })
    .catch(() => { dispatch(ActionCreator.loadOffersError()); });
};
