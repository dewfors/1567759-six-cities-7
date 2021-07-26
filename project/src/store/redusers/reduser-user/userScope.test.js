import {AuthorizationStatus} from '../../../utils/const';
import {ActionType} from '../../action';
import {userScope} from './userScope';


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

const user = {
  'id': 13,
  'name': 'Angelina',
  'isPro': true,
  'avatarUrl': 'img/avatar-angelina.jpg',
};


describe('Reducer: userScope', () => {
  it('без параметров должен вернуть начальный стейт', () => {
    expect(userScope(undefined, {}))
      .toEqual(initialState);
  });

  it('requireAuthorization', () => {
    const action = {type: ActionType.REQUIRED_AUTHORIZATION, payload: AuthorizationStatus.UNKNOWN};
    expect(userScope(initialState, action))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.UNKNOWN});
  });

  it('setAuthUserData', () => {
    const action = {type: ActionType.SET_USER_INFO, payload: user};
    expect(userScope(initialState, action))
      .toEqual({...initialState, userInfo: action.payload});
  });

  it('loginRequest', () => {
    const action = {type: ActionType.LOGIN_REQUEST};
    expect(userScope(initialState, action))
      .toEqual({...initialState, loginStatus: {...initialState.loginStatus, isLoading: true}});
  });

  it('loginSuccess', () => {
    const action = {type: ActionType.LOGIN_SUCCESS};
    expect(userScope(initialState, action))
      .toEqual({...initialState, loginStatus: {...initialState.loginStatus, isLoading: false, isSuccess: true}});
  });

  it('loginError', () => {
    const action = {type: ActionType.LOGIN_ERROR};
    expect(userScope(initialState, action))
      .toEqual({...initialState, loginStatus: {...initialState.loginStatus, isLoading: false, isError: true}});
  });

  it('logoutRequest', () => {
    const action = {type: ActionType.LOGOUT_REQUEST};
    expect(userScope(initialState, action))
      .toEqual({...initialState, logoutStatus: {...initialState.logoutStatus, isLoading: true}});
  });

  it('logoutSuccess', () => {
    const action = {type: ActionType.LOGOUT_SUCCESS};
    expect(userScope(initialState, action))
      .toEqual({...initialState, logoutStatus: {...initialState.logoutStatus, isLoading: false, isSuccess: true}});
  });
  it('logoutError', () => {
    const action = {type: ActionType.LOGOUT_ERROR};
    expect(userScope(initialState, action))
      .toEqual({...initialState, logoutStatus: {...initialState.logoutStatus, isLoading: false, isError: true}});
  });

  it('logout', () => {
    const action = {type: ActionType.LOGOUT};
    expect(userScope(initialState, action))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

});
