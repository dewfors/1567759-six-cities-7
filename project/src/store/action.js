export const ActionType = {
  SET_CITY: 'main/changeCity',
  SET_SORT_TYPE: 'main/changeSortType',

  LOAD_OFFERS_REQUEST: 'offers/loadRequest',
  LOAD_OFFERS_SUCCESS: 'offers/loadSuccess',
  LOAD_OFFERS_ERROR: 'offers/loadError',

  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  loadOffersRequest: () => ({
    type: ActionType.LOAD_OFFERS_REQUEST,
  }),
  loadOffersSuccess: (offers) => ({
    type: ActionType.LOAD_OFFERS_SUCCESS,
    payload: offers,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
