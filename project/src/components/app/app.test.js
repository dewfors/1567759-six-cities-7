import React from 'react';
import {
  render,
  screen
} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {
  AppRoute,
  Settings
} from '../../utils/const';
import App from './app';
import {CITY} from '../../mocks/city';
import {getAdaptedToClientComments} from '../../utils/utils';
import {store as fakeStore} from '../../tests/test-utils';


const comments = getAdaptedToClientComments();


let history = null;
let store = null;
let fakeApp = null;


describe('Application Routing', () => {
  beforeAll(() => {

    history = createMemoryHistory();
    store = fakeStore;
    // const createFakeStore = configureStore({});
    // store = createFakeStore({
    //   [NameSpace.OFFERS]: {
    //     offers: offers,
    //     loadOffersStatus: {
    //       isLoadError: false,
    //       isLoading: false,
    //       isLoadSuccess: false,
    //     },
    //     offer: {},
    //     loadOfferStatus: {
    //       isLoadError: false,
    //       isLoading: false,
    //       isLoadSuccess: false,
    //     },
    //     offersNearby: {
    //       data: [],
    //       isError: false,
    //       isLoading: false,
    //       isSuccess: false,
    //     },
    //   },
    //   [NameSpace.USER]: {
    //     authorizationStatus: AuthorizationStatus.UNKNOWN,
    //     userInfo: {},
    //     loginStatus: {
    //       isError: false,
    //       isLoading: false,
    //       isSuccess: false,
    //     },
    //     logoutStatus: {
    //       isError: false,
    //       isLoading: false,
    //       isSuccess: false,
    //     },
    //   },
    //   [NameSpace.APP]: {
    //     currentCity: Settings.DEFAULT_CITY,
    //     currentSortType: SORT_TYPE_DEFAULT,
    //   },
    //
    // });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App comments={comments} city={CITY} cityList={Settings.CITYES}/>
        </Router>
      </Provider>
    );

  });

  it('should render PageHome screen when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('1 places to stay in Paris')).toBeInTheDocument();
  });

});
