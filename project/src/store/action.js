export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_OFFERS_BY_CITY: 'main/loadOffersByCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
};
