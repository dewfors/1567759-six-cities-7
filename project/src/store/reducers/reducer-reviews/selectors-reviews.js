import {NameSpace} from '../root-reducer';

const getComments = (state) => state[NameSpace.COMMENT].reviews;

export {
  getComments
};
