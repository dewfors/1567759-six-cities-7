export const MAX_PERSENT = 100;
export const MAX_STARS = 5;

export const formReviewKeyType = {
  STARS: 'stars',
  REVIEW: 'review',
};

export const AppRoute = {
  ROOT: '/',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  COMMENTS: '/comments',
  NOT_FOUND: '/404',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const Settings = {
  CITYES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  DEFAULT_CITY: 'Paris',
  CITIES_INFO: [
    {name: 'Paris', coords: [48.85661, 2.351499], zoom: 13},
    {name: 'Cologne', coords: [50.938361, 6.959974], zoom: 13},
    {name: 'Brussels', coords: [50.846557, 4.351697], zoom: 13},
    {name: 'Amsterdam', coords: [52.37454, 4.897976], zoom: 13},
    {name: 'Hamburg', coords: [53.550341, 10.000654], zoom: 13},
    {name: 'Dusseldorf', coords: [51.225402, 6.776314], zoom: 13},
  ],
};

export const SortingTypes = {
  POPULAR: {sortType: 'Popular', sortKey: null, sortDirection: null},
  PRICE_LOW_TO_HIGH: {sortType: 'Price: low to high', sortKey: 'price', sortDirection: 'ask'},
  PRICE_HIGH_TO_LOW: {sortType: 'Price: high to low', sortKey: 'price', sortDirection: 'desc'},
  TOP_RATED_FIRST: {sortType: 'Top rated first', sortKey: 'rating', sortDirection: 'desc'},
};
