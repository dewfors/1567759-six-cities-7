import {NameSpace} from '../root-reducer';

const getCurrentCity = (state) => state[NameSpace.APP].currentCity;
const getCurrentSortType = (state) => state[NameSpace.APP].currentSortType;

export {
  getCurrentCity, getCurrentSortType
};
