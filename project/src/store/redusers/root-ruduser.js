import {combineReducers} from 'redux';
import {offers} from "./reduser-offers/offers";
import {app} from "./reduser-app/app";
import {user} from "./reduser-user/user";
import {reviews} from "./reduser-reviews/reviews";


const NameSpace = {
  OFFERS: 'offers',
  APP: 'app',
  USER: 'user',
  COMMENT: 'comment',
};


export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user,
  [NameSpace.COMMENT]: reviews,
});
