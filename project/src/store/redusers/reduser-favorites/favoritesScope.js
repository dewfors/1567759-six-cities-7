import {createReducer} from "@reduxjs/toolkit";
import {
  changeFavoritesError, changeFavoritesList,
  changeFavoritesRequest, changeFavoritesSuccess,
  loadFavoritesError,
  loadFavoritesRequest, loadFavoritesSuccess,
} from "../../action";

const initialState = {
  favorites: [],
  loadFavoritesStatus: {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  changeFavoriteStatus: {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
};

const favoritesScope = createReducer(initialState, ((builder) => {
  builder
    .addCase(loadFavoritesRequest, (state) => {
      state.loadFavoritesStatus.isLoading = true;
    })
    .addCase(loadFavoritesSuccess, (state, action) => {
      state.favorites = action.payload;
      state.loadFavoritesStatus.isLoading = false;
      state.loadFavoritesStatus.isSuccess = true;
    })
    .addCase(loadFavoritesError, (state) => {
      state.loadFavoritesStatus.isLoading = false;
      state.loadFavoritesStatus.isSuccess = false;
      state.loadFavoritesStatus.isError = true;
    })
    .addCase(changeFavoritesRequest, (state) => {
      state.changeFavoriteStatus.isLoading = true;
    })
    .addCase(changeFavoritesSuccess, (state, action) => {
      state.changeFavoriteStatus.data = action.payload;
      state.changeFavoriteStatus.isLoading = false;
      state.changeFavoriteStatus.isSuccess = true;
    })
    .addCase(changeFavoritesError, (state) => {
      state.changeFavoriteStatus.isLoading = false;
      state.changeFavoriteStatus.isSuccess = false;
      state.changeFavoriteStatus.isError = true;
    })
    .addCase(changeFavoritesList, (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
    });

}));

export {favoritesScope};
