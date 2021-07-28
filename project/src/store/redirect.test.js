import Redirect from './redirect';
import {redirectToUrl} from '../store/action';
import {AppRoute} from '../utils/const';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => Redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
};

jest.mock('../utils/browser-history', () => fakeHistory);

describe('Middleware: redirect', () => {
  it('action should passes to next middleware', () => {
    const {invoke, next} = mockRedux();
    const action = redirectToUrl(AppRoute.ROOT);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to fakeHistory', () => {
    const {invoke} = mockRedux();
    invoke(redirectToUrl(AppRoute.LOGIN));
    expect(fakeHistory.location.pathname).toBe(AppRoute.LOGIN);

    invoke(redirectToUrl(AppRoute.NOT_FOUND));
    expect(fakeHistory.location.pathname).toBe(AppRoute.NOT_FOUND);
  });

  it('should not redirect because bad action', () => {
    const url = '/test-url';
    const {invoke} = mockRedux();
    invoke({type: 'TEST_ACTION', payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });

});
