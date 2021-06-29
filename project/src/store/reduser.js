import {ActionType} from './action';
import {Settings} from '../utils/const';

const initialState = {
  city: Settings.DEFAULT_CITY,
  cityOffers: [],
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.LOAD_OFFERS_BY_CITY:
      return {
        ...state,
        cityOffers: action.payload,
      };
    default:
      return state;
  }
};

export {reduser};
