export const ActionType = {
  SET_CITY: 'main/changeCity',
  SET_SORT_TYPE: 'main/changeSortType',

  LOAD_OFFERS_REQUEST: 'offers/loadRequest',
  LOAD_OFFERS_SUCCESS: 'offers/loadSuccess',
  LOAD_OFFERS_ERROR: 'offers/loadError',

  LOGIN_REQUEST: 'login/request',
  LOGIN_SUCCESS: 'login/success',
  LOGIN_ERROR: 'login/error',

  LOGOUT_REQUEST: 'logout/request',
  LOGOUT_SUCCESS: 'logout/success',
  LOGOUT_ERROR: 'logout/error',
  SET_USER_INFO: 'auth/setUserInfo',

  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',

  REDIRECT_TO_BACK: 'route/redirectBack',
  REDIRECT_TO_URL: 'route/redirectUrl',

};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),

  changeSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),


  loadOffersRequest: () => ({
    type: ActionType.LOAD_OFFERS_REQUEST,
  }),
  loadOffersSuccess: (offers) => ({
    type: ActionType.LOAD_OFFERS_SUCCESS,
    payload: offers,
  }),
  loadOffersError: () => ({
    type: ActionType.LOAD_OFFERS_ERROR,
  }),


  loginRequest: () => ({
    type: ActionType.LOGIN_REQUEST,
  }),
  loginSuccess: () => ({
    type: ActionType.LOGIN_SUCCESS,
  }),
  loginError: () => ({
    type: ActionType.LOGIN_ERROR,
  }),


  logoutRequest: () => ({
    type: ActionType.LOGOUT_REQUEST,
  }),

  logoutSuccess: () => ({
    type: ActionType.LOGOUT_SUCCESS,
  }),

  logoutError: () => ({
    type: ActionType.LOGOUT_ERROR,
  }),


  setAuthUserData: (userInfo) => ({
    type: ActionType.SET_USER_INFO,
    payload: userInfo,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),


  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  redirectToBack: () => ({
    type: ActionType.REDIRECT_TO_BACK,
  }),
  redirectToUrl: (url) => ({
    type: ActionType.REDIRECT_TO_URL,
    payload: url,
  }),

};
