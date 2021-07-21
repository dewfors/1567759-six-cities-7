import {combineReducers} from 'redux';
import {offersScope} from './reduser-offers/offersScope';
import {appScope} from './reduser-app/appScope';
import {userScope} from './reduser-user/userScope';
import {reviewsScope} from './reduser-reviews/reviewsScope';


const NameSpace = {
  OFFERS: 'offersSpace',
  APP: 'appSpace',
  USER: 'userSpace',
  COMMENT: 'commentSpace',
};


export default combineReducers({
  [NameSpace.OFFERS]: offersScope,
  [NameSpace.APP]: appScope,
  [NameSpace.USER]: userScope,
  [NameSpace.COMMENT]: reviewsScope,
});
