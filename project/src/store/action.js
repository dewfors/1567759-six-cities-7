export const ActionType = {
  SET_CITY: 'main/changeCity',
  SET_OFFERS: 'main/loadOffersByCity',
  SET_SORT_TYPE: 'main/changeSortType',

  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
