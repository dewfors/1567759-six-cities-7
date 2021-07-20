import {ActionType} from '../../action';
import {AuthorizationStatus} from '../../../utils/const';

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

const user = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };


    case ActionType.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: true },
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: false, isSuccess: true },
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        loginStatus: { ...state.loginStatus, isLoading: false, isError: true },
      };

    case ActionType.LOGOUT_REQUEST:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: true },
      };
    case ActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: false, isSuccess: true },
      };
    case ActionType.LOGOUT_ERROR:
      return {
        ...state,
        logoutStatus: { ...state.loginStatus, isLoading: false, isError: true },
      };


    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {user};
