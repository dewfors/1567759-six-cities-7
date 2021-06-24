import {ActionType} from './action';

const initialState = {
  city: '',
  cityOffers: [],
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      }
    case ActionType.FILL_OFFERS_BY_CITY:
    default:
      return state;
  }
}

export {reduser};
