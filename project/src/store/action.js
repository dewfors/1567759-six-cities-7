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
};
