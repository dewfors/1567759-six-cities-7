import {offersScope} from './offersScope';
import {ActionType} from '../../action';


const offers = [
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13,
      },
    },
    'previewImage': 'https://7.react.pages.academy/static/hotel/15.jpg',
    'images': [
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
    ],
    'title': 'Beautiful & luxurious apartment at great location',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 279,
    'goods': [
      'Baby seat',
      'Laptop friendly workspace',
      'Washer',
      'Towels',
      'Breakfast',
      'Air conditioning',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16,
    },
    'id': 1,
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13,
      },
    },
    'previewImage': 'https://7.react.pages.academy/static/hotel/20.jpg',
    'images': [
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6,
    'type': 'hotel',
    'bedrooms': 3,
    'maxAdults': 6,
    'price': 282,
    'goods': [
      'Laptop friendly workspace',
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg',
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16,
    },
    'id': 2,
  },
];

const offer = {
  'city': {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13,
    },
  },
  'previewImage': 'https://7.react.pages.academy/static/hotel/15.jpg',
  'images': [
    'https://7.react.pages.academy/static/hotel/15.jpg',
    'https://7.react.pages.academy/static/hotel/1.jpg',
    'https://7.react.pages.academy/static/hotel/20.jpg',
    'https://7.react.pages.academy/static/hotel/8.jpg',
    'https://7.react.pages.academy/static/hotel/9.jpg',
    'https://7.react.pages.academy/static/hotel/14.jpg',
    'https://7.react.pages.academy/static/hotel/13.jpg',
    'https://7.react.pages.academy/static/hotel/7.jpg',
    'https://7.react.pages.academy/static/hotel/16.jpg',
    'https://7.react.pages.academy/static/hotel/10.jpg',
    'https://7.react.pages.academy/static/hotel/12.jpg',
    'https://7.react.pages.academy/static/hotel/4.jpg',
    'https://7.react.pages.academy/static/hotel/19.jpg',
    'https://7.react.pages.academy/static/hotel/18.jpg',
  ],
  'title': 'Beautiful & luxurious apartment at great location',
  'isFavorite': false,
  'isPremium': false,
  'rating': 4.5,
  'type': 'room',
  'bedrooms': 1,
  'maxAdults': 3,
  'price': 279,
  'goods': [
    'Baby seat',
    'Laptop friendly workspace',
    'Washer',
    'Towels',
    'Breakfast',
    'Air conditioning',
  ],
  'host': {
    'id': 25,
    'name': 'Angelina',
    'isPro': true,
    'avatarUrl': 'img/avatar-angelina.jpg',
  },
  'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
  'location': {
    'latitude': 53.550341,
    'longitude': 9.980654000000001,
    'zoom': 16,
  },
  'id': 1,
};

const initialState = {
  offers: [],
  loadOffersStatus: {
    isLoadError: false,
    isLoading: false,
    isLoadSuccess: false,
  },
  offer: {},
  loadOfferStatus: {
    isLoadError: false,
    isLoading: false,
    isLoadSuccess: false,
  },
  offersNearby: {
    data: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
  },

};

describe('Reducer: offersScope', () => {
  it('без параметров должен вернуть начальный стейт', () => {
    expect(offersScope(undefined, {}))
      .toEqual(initialState);
  });

  it('loadOffersRequest', () => {
    const action = {type: ActionType.LOAD_OFFERS_REQUEST};
    expect(offersScope(initialState, action))
      .toEqual({...initialState, loadOffersStatus: {...initialState.loadOffersStatus, isLoading: true}});
  });

  it('loadOffersSuccess', () => {
    const action = {type: ActionType.LOAD_OFFERS_SUCCESS, payload: offers};
    expect(offersScope(initialState, action))
      .toEqual({
        ...initialState,
        offers: action.payload,
        loadOffersStatus:
          {
            ...initialState.loadOffersStatus,
            isLoading: false,
            isLoadSuccess: true,
          },
      });
  });

  it('loadOffersError', () => {
    const action = {type: ActionType.LOAD_OFFERS_ERROR};
    expect(offersScope(initialState, action))
      .toEqual({
        ...initialState,
        loadOffersStatus:
          {
            ...initialState.loadOffersStatus,
            isLoading: false,
            isLoadSuccess: false,
          },
      });
  });

  it('loadOfferRequest', () => {
    const action = {type: ActionType.LOAD_OFFER_REQUEST};
    expect(offersScope(initialState, action))
      .toEqual({...initialState, loadOfferStatus: {...initialState.loadOfferStatus, isLoading: true}});
  });

  it('loadOfferSuccess', () => {
    const action = {type: ActionType.LOAD_OFFER_SUCCESS, payload: offer};
    expect(offersScope(initialState, action))
      .toEqual({
        ...initialState,
        offer: action.payload,
        loadOfferStatus:
          {
            ...initialState.loadOfferStatus,
            isLoading: false,
            isLoadSuccess: true,
          },
      });
  });

  it('loadOfferError', () => {
    const action = {type: ActionType.LOAD_OFFER_ERROR};
    expect(offersScope(initialState, action))
      .toEqual({
        ...initialState,
        loadOfferStatus:
          {
            ...initialState.loadOfferStatus,
            isLoading: false,
            isLoadSuccess: false,
          },
      });
  });


  it('loadOfferNearbyRequest', () => {
    const action = {type: ActionType.LOAD_OFFER_NEARBY_REQUEST};
    expect(offersScope(initialState, action))
      .toEqual({...initialState, offersNearby: {...initialState.offersNearby, isLoading: false}});
  });

  it('loadOfferNearbySuccess', () => {
    const action = {type: ActionType.LOAD_OFFER_NEARBY_SUCCESS, payload: offers};
    expect(offersScope(initialState, action))
      .toEqual({
        ...initialState,
        offersNearby: {...initialState.offersNearby, data: action.payload, isLoading: false, isSuccess: true},
      });
  });

  it('loadOfferNearbyError', () => {
    const action = {type: ActionType.LOAD_OFFER_NEARBY_ERROR};
    expect(offersScope(initialState, action))
      .toEqual({
        ...initialState,
        offersNearby: {...initialState.offersNearby, isLoading: false, isSuccess: false, isError: true},
      });
  });

});
