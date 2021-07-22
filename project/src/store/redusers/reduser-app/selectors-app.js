import {NameSpace} from '../root-ruduser';

const getCurrentCity = (state) => state[NameSpace.APP].currentCity;

export {
  getCurrentCity
};
