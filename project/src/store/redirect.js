import {createBrowserHistory} from 'history';
import {ActionType} from './action';

const browserHistory = createBrowserHistory();

const Redirect = () => (next) => (action) => {
  // console.log(action);
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  // debugger;
  if (action.type === ActionType.REDIRECT_TO_BACK) {
    browserHistory.goBack();
  }
  return next(action);
};

export default Redirect;
