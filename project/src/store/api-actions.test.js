import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {checkAuth, fetchHotels, fetchLogin, fetchLogout} from './api-actions';
import {AppRoute, AuthorizationStatus} from '../utils/const';
import {ActionType} from './action';

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


const user = {
  'id': 13,
  'name': 'Angelina',
  'isPro': true,
  'avatarUrl': 'img/avatar-angelina.jpg',
};


let api = null;


describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {
    });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(AppRoute.LOGIN)
      .reply(200, user);

    return checkAuthLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_INFO,
          payload: user,
        });
      });

  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: '1@test.ru', password: '123'};
    const fetchLoginLoader = fetchLogin(fakeUser);

    apiMock
      .onPost(AppRoute.LOGIN)
      .reply(200, user);

    return fetchLoginLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGIN_REQUEST,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_USER_INFO,
          payload: user,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.LOGIN_SUCCESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.REDIRECT_TO_BACK,
        });
      });

  });


  it('should make a correct API call to DELETE /Logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchLogoutLoader = fetchLogout();

    apiMock
      .onDelete(AppRoute.LOGOUT)
      .reply(200);

    return fetchLogoutLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT_REQUEST,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOGOUT_SUCCESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_URL,
          payload: AppRoute.ROOT,
        });
      });

  });


  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchHotelsLoader = fetchHotels();

    apiMock
      .onGet(AppRoute.HOTELS)
      .reply(200, offers);

    return fetchHotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_REQUEST,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFERS_SUCCESS,
          payload: offers,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchLogoutLoader = fetchLogout();

    apiMock
      .onDelete(AppRoute.LOGOUT)
      .reply(200);

    return fetchLogoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOGOUT_SUCCESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });

});
