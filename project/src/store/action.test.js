import {
  ActionType,
  changeCity, changeFavoritesError, changeFavoritesList, changeFavoritesRequest, changeFavoritesSuccess,
  changeOfferFavorite,
  changeOffersFavorite,
  changeSortType, loadFavoritesError, loadFavoritesRequest, loadFavoritesSuccess,
  loadOfferError,
  loadOfferNearbyError,
  loadOfferNearbyRequest,
  loadOfferNearbySuccess,
  loadOfferRequest,
  loadOffersError,
  loadOffersRequest,
  loadOffersSuccess,
  loadOfferSuccess,
  loadReviewError,
  loadReviewRequest,
  loadReviewSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logout,
  logoutError,
  logoutRequest,
  logoutSuccess, redirectToBack, redirectToUrl,
  requireAuthorization,
  sendNewReviewError,
  sendNewReviewRequest,
  sendNewReviewSuccess,
  setAuthUserData
} from './action';


describe('Actions', () =>{

  const testValue = 'test';

  it('action creator for changeCity action', () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: testValue,
    }
    expect(changeCity(testValue)).toEqual(expectedAction);
  });

  it('action creator for changeSortType action', () => {
    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: testValue,
    }
    expect(changeSortType(testValue)).toEqual(expectedAction);
  });

  it('action creator for loadOffersRequest action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_REQUEST,
    }
    expect(loadOffersRequest()).toEqual(expectedAction);
  });

  it('action creator for loadOffersSuccess action', () => {
    const offers = [{id: 1}, {id: 2}];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS_SUCCESS,
      payload: offers,
    }
    expect(loadOffersSuccess(offers)).toEqual(expectedAction);
  });

  it('action creator for loadOffersError action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_ERROR,
    }
    expect(loadOffersError()).toEqual(expectedAction);
  });

  it('action creator for changeOffersFavorite action', () => {
    const offer = {id: 1};

    const expectedAction = {
      type: ActionType.CHANGE_OFFERS_FAVORITES,
      payload: offer,
    }
    expect(changeOffersFavorite(offer)).toEqual(expectedAction);
  });

  it('action creator for changeOfferFavorite action', () => {
    const offer = {id: 1};

    const expectedAction = {
      type: ActionType.CHANGE_OFFER_FAVORITE,
      payload: offer,
    }
    expect(changeOfferFavorite(offer)).toEqual(expectedAction);
  });





  it('action creator for loadOfferRequest action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER_REQUEST,
    }
    expect(loadOfferRequest()).toEqual(expectedAction);
  });

  it('action creator for loadOfferSuccess action', () => {
    const offer = {id: 1};

    const expectedAction = {
      type: ActionType.LOAD_OFFER_SUCCESS,
      payload: offer,
    }
    expect(loadOfferSuccess(offer)).toEqual(expectedAction);
  });

  it('action creator for loadOfferError action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER_ERROR,
    }
    expect(loadOfferError()).toEqual(expectedAction);
  });




  it('action creator for loadOfferNearbyRequest action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER_NEARBY_REQUEST,
    }
    expect(loadOfferNearbyRequest()).toEqual(expectedAction);
  });

  it('action creator for loadOfferNearbySuccess action', () => {
    const offers = [{id: 1}, {id: 2}];

    const expectedAction = {
      type: ActionType.LOAD_OFFER_NEARBY_SUCCESS,
      payload: offers,
    }
    expect(loadOfferNearbySuccess(offers)).toEqual(expectedAction);
  });

  it('action creator for loadOfferNearbyError action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER_NEARBY_ERROR,
    }
    expect(loadOfferNearbyError()).toEqual(expectedAction);
  });




  it('action creator for loadReviewRequest action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS_REQUEST,
    }
    expect(loadReviewRequest()).toEqual(expectedAction);
  });

  it('action creator for loadReviewSuccess action', () => {
    const reviews = [{id: 1}, {id: 2}];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS_SUCCESS,
      payload: reviews,
    }
    expect(loadReviewSuccess(reviews)).toEqual(expectedAction);
  });

  it('action creator for loadReviewError action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS_ERROR,
    }
    expect(loadReviewError()).toEqual(expectedAction);
  });





  it('action creator for sendNewReviewRequest action', () => {
    const expectedAction = {
      type: ActionType.SEND_NEW_REVIEW_REQUEST,
    }
    expect(sendNewReviewRequest()).toEqual(expectedAction);
  });

  it('action creator for sendNewReviewSuccess action', () => {
    const review = {id: 1};

    const expectedAction = {
      type: ActionType.SEND_NEW_REVIEW_SUCCESS,
      payload: review,
    }
    expect(sendNewReviewSuccess(review)).toEqual(expectedAction);
  });

  it('action creator for sendNewReviewError action', () => {
    const expectedAction = {
      type: ActionType.SEND_NEW_REVIEW_ERROR,
    }
    expect(sendNewReviewError()).toEqual(expectedAction);
  });




  it('action creator for loginRequest action', () => {
    const expectedAction = {
      type: ActionType.LOGIN_REQUEST,
    }
    expect(loginRequest()).toEqual(expectedAction);
  });
  it('action creator for loginSuccess action', () => {
    const expectedAction = {
      type: ActionType.LOGIN_SUCCESS,
    }
    expect(loginSuccess()).toEqual(expectedAction);
  });
  it('action creator for loginError action', () => {
    const expectedAction = {
      type: ActionType.LOGIN_ERROR,
    }
    expect(loginError()).toEqual(expectedAction);
  });






  it('action creator for logoutRequest action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT_REQUEST,
    }
    expect(logoutRequest()).toEqual(expectedAction);
  });
  it('action creator for logoutSuccess action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT_SUCCESS,
    }
    expect(logoutSuccess()).toEqual(expectedAction);
  });
  it('action creator for logoutError action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT_ERROR,
    }
    expect(logoutError()).toEqual(expectedAction);
  });
  it('action creator for logout action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    }
    expect(logout()).toEqual(expectedAction);
  });


  it('action creator for setAuthUserData action', () => {
    const user = {id: 1, name: 'John'};

    const expectedAction = {
      type: ActionType.SET_USER_INFO,
      payload: user,
    }
    expect(setAuthUserData(user)).toEqual(expectedAction);
  });


  it('action creator for requireAuthorization action', () => {
    const status = 'AUTH';

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    }
    expect(requireAuthorization(status)).toEqual(expectedAction);
  });


  it('action creator for redirectToBack action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_BACK,
    }
    expect(redirectToBack()).toEqual(expectedAction);
  });
  it('action creator for redirectToUrl action', () => {
    const url = '/';

    const expectedAction = {
      type: ActionType.REDIRECT_TO_URL,
      payload: url,
    }
    expect(redirectToUrl(url)).toEqual(expectedAction);
  });



  it('action creator for loadFavoritesRequest action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES_REQUEST,
    }
    expect(loadFavoritesRequest()).toEqual(expectedAction);
  });
  it('action creator for loadFavoritesSuccess action', () => {
    const offers = [{id: 1}, {id: 2}];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES_SUCCESS,
      payload: offers,
    }
    expect(loadFavoritesSuccess(offers)).toEqual(expectedAction);
  });
  it('action creator for loadFavoritesError action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES_ERROR,
    }
    expect(loadFavoritesError()).toEqual(expectedAction);
  });





  it('action creator for changeFavoritesRequest action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITES_REQUEST,
    }
    expect(changeFavoritesRequest()).toEqual(expectedAction);
  });
  it('action creator for changeFavoritesSuccess action', () => {
    const offer = {id: 1};

    const expectedAction = {
      type: ActionType.CHANGE_FAVORITES_SUCCESS,
      payload: offer,
    }
    expect(changeFavoritesSuccess(offer)).toEqual(expectedAction);
  });
  it('action creator for changeFavoritesError action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITES_ERROR,
    }
    expect(changeFavoritesError()).toEqual(expectedAction);
  });

  it('action creator for changeFavoritesList action', () => {
    const offer = {id: 1};

    const expectedAction = {
      type: ActionType.CHANGE_FAVORITES_LIST,
      payload: offer,
    }
    expect(changeFavoritesList(offer)).toEqual(expectedAction);
  });


























});
