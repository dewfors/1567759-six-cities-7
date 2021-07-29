import {
  changeCity,
  changeSortType
} from '../../action';
import {Settings} from '../../../utils/const';
import {createReducer} from '@reduxjs/toolkit';

const SORT_TYPE_DEFAULT = 'Popular';

const initialState = {
  currentCity: Settings.DEFAULT_CITY,
  currentSortType: SORT_TYPE_DEFAULT,
};

const appScope = createReducer(initialState, ((builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload;
    });
}));

export {appScope, SORT_TYPE_DEFAULT};
