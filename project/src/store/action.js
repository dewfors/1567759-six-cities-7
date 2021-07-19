export const ActionType = {
  SET_CITY: 'main/changeCity',
  SET_SORT_TYPE: 'main/changeSortType',

  LOAD_OFFERS_REQUEST: 'offers/loadRequest',
  LOAD_OFFERS_SUCCESS: 'offers/loadSuccess',
  LOAD_OFFERS_ERROR: 'offers/loadError',

  LOAD_OFFER_REQUEST: 'offer/loadRequest',
  LOAD_OFFER_SUCCESS: 'offer/loadSuccess',
  LOAD_OFFER_ERROR: 'offer/loadError',

  LOAD_OFFER_NEARBY_REQUEST: 'offer-nearby/request',
  LOAD_OFFER_NEARBY_SUCCESS: 'offer-nearby/success',
  LOAD_OFFER_NEARBY_ERROR: 'offer-nearby/error',


  LOAD_REVIEWS_REQUEST: 'review/request',
  LOAD_REVIEWS_ERROR: 'review/error',
  LOAD_REVIEWS_SUCCESS: 'review/success',


  SEND_NEW_REVIEW_REQUEST: 'review/new-review-request',
  SEND_NEW_REVIEW_ERROR: 'review/new-review-error',
  SEND_NEW_REVIEW_SUCCESS: 'review/new-review-success',


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


  loadOfferRequest: () => ({
    type: ActionType.LOAD_OFFER_REQUEST,
  }),
  loadOfferSuccess: (offer) => ({
    type: ActionType.LOAD_OFFER_SUCCESS,
    payload: offer,
  }),
  loadOfferError: () => ({
    type: ActionType.LOAD_OFFER_ERROR,
  }),


  loadOfferNearbyRequest: () => ({
    type: ActionType.LOAD_OFFER_NEARBY_REQUEST,
  }),
  loadOfferNearbySuccess: (offers) => ({
    type: ActionType.LOAD_OFFER_NEARBY_SUCCESS,
    payload: offers,
  }),
  loadOfferNearbyError: () => ({
    type: ActionType.LOAD_OFFER_NEARBY_ERROR,
  }),


  loadReviewRequest: () => ({
    type: ActionType.LOAD_REVIEWS_REQUEST,
  }),
  loadReviewSuccess: (reviews) => ({
    type: ActionType.LOAD_REVIEWS_SUCCESS,
    payload: reviews,
  }),
  loadReviewError: () => ({
    type: ActionType.LOAD_REVIEWS_ERROR,
  }),


  sendNewReviewRequest: () => ({
    type: ActionType.SEND_NEW_REVIEW_REQUEST,
  }),
  sendNewReviewSuccess: (reviews) => ({
    type: ActionType.SEND_NEW_REVIEW_SUCCESS,
    payload: reviews,
  }),
  sendNewReviewError: () => ({
    type: ActionType.SEND_NEW_REVIEW_ERROR,
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
