import {
  loginError,
  loginRequest,
  loginSuccess,
  logout,
  logoutError,
  logoutRequest,
  logoutSuccess,
  requireAuthorization,
  setAuthUserData
} from '../../action';
import {AuthorizationStatus} from '../../../utils/const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
  loginStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
  logoutStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
};

const userScope = createReducer(initialState, (builder => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthUserData, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(loginRequest, (state, action) => {
      state.loginStatus.isLoading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loginStatus.isLoading = false;
      state.loginStatus.isSuccess = true;
    })
    .addCase(loginError, (state, action) => {
      state.loginStatus.isLoading = false;
      state.loginStatus.isError = true;
    })
    .addCase(logoutRequest, (state, action) => {
      state.logoutStatus.isLoading = true;
    })
    .addCase(logoutSuccess, (state, action) => {
      state.logoutStatus.isLoading = false;
      state.logoutStatus.isSuccess = true;
    })
    .addCase(logoutError, (state, action) => {
      state.logoutStatus.isLoading = false;
      state.logoutStatus.isError = true;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
}));

export {userScope};
