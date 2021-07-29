import {
  appScope,
  SORT_TYPE_DEFAULT
} from './appScope';
import {Settings} from '../../../utils/const';
import {ActionType} from '../../action';


describe('Reduser: appScope', () => {

  it('без входящих параметров должен вернуться начальный стейт', () => {
    expect(appScope(undefined, {}))
      .toEqual({currentCity: Settings.DEFAULT_CITY, currentSortType: SORT_TYPE_DEFAULT});
  });

  it('Изменение города', () => {
    const state = {currentCity: 'Paris', currentSortType: 'Popular'};
    const action = {type: ActionType.SET_CITY, payload: 'Hamburg'};
    expect(appScope(state, action))
      .toEqual({currentCity: 'Hamburg', currentSortType: 'Popular'});
  });

  it('Изменение сортировки', () => {
    const state = {currentCity: 'Paris', currentSortType: 'Popular'};
    const action = {type: ActionType.SET_SORT_TYPE, payload: 'Price: low to high'};
    expect(appScope(state, action))
      .toEqual({currentCity: 'Paris', currentSortType: 'Price: low to high'});
  });

});
