import {createBrowserHistory} from 'history';
import {ActionType} from './action';

const browserHistory = createBrowserHistory();

const Redirect = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_URL) {
    browserHistory.push(action.payload);
  }
  if (action.type === ActionType.REDIRECT_TO_BACK) {
    browserHistory.goBack();
  }
  return next(action);
};

export default Redirect;
