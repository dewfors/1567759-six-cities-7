export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_OFFERS_BY_CITY: 'main/loadOffersByCity',
}

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

};
