import {ActionType} from '../../action';
import {Settings} from '../../../utils/const';

const SORT_TYPE_DEFAULT = 'Popular';

const initialState = {
  currentCity: Settings.DEFAULT_CITY,
  currentSortType: SORT_TYPE_DEFAULT,
};

const app = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };
    default:
      return state;
  }
};

export {app};
