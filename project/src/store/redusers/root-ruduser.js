import {combineReducers} from 'redux';
import {offersScope} from './reduser-offers/offersScope';
import {appScope} from './reduser-app/appScope';
import {userScope} from './reduser-user/userScope';
import {reviewsScope} from './reduser-reviews/reviewsScope';
import {favoritesScope} from './reduser-favorites/favoritesScope';


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
