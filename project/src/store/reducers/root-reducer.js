import {combineReducers} from 'redux';
import {offersScope} from './reducer-offers/offersScope';
import {appScope} from './reducer-app/appScope';
import {userScope} from './reducer-user/userScope';
import {reviewsScope} from './reducer-reviews/reviewsScope';
import {favoritesScope} from './reducer-favorites/favoritesScope';


export const NameSpace = {
  OFFERS: 'offersSpace',
  APP: 'appSpace',
  USER: 'userSpace',
  COMMENT: 'commentSpace',
  FAVORITES: 'favoritesSpace',
};


export default combineReducers({
  [NameSpace.OFFERS]: offersScope,
  [NameSpace.APP]: appScope,
  [NameSpace.USER]: userScope,
  [NameSpace.COMMENT]: reviewsScope,
  [NameSpace.FAVORITES]: favoritesScope,
});
