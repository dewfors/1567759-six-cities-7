export const ActionType = {
  SET_CITY: 'main/changeCity',
  SET_OFFERS: 'main/loadOffersByCity',
  SET_SORT_TYPE: 'main/changeSortType',
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
};
